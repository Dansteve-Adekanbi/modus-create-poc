import { Injectable, OnDestroy } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnDestroy {

  public status: ConnectionStatus;
  private statusSubject: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(null);

  private networkStatus: ConnectionStatus;
  private networkListener: PluginListenerHandle;
  private noNetworkMessage: HTMLIonToastElement;


  constructor(
    public toastController: ToastController,
  ) {
    this.noNetworkMessageInit();
  }

  async noNetworkMessageInit() {
    this.noNetworkMessage = await this.successToast(`Hmm... you're not connected to the Internet `, 'top', 'danger', 10000);
  }

  public initializeNetworkSubscription(): void {
    this.networkListener = Network.addListener('networkStatusChange', (networkStatus: ConnectionStatus) => {
      this.setStatus(networkStatus);

      if (!networkStatus.connected) {
        this.noNetworkMessage.present()
          .then((res) => console.warn(res))
          .catch((error) => console.warn(error));
      } else {
        this.noNetworkMessage.dismiss();
      }

      console.warn('Network status changed', networkStatus);
      this.networkStatus = networkStatus;
    });
  }

  public getNetworkType(): string {
    return this.networkStatus.connectionType;
  }

  public getNetworkStatus(): Observable<ConnectionStatus> {
    return this.statusSubject.asObservable();
  }

  ngOnDestroy() {
    this.networkListener.remove();
  }

  private setStatus(status: ConnectionStatus) {
    this.status = status;
    this.statusSubject.next(this.status);
  }


  private async successToast(
    message: string,
    position: 'top' | 'bottom' | 'middle' = 'top',
    color: string = 'light',
    duration: number = 2000,
    cssClass: string = 'text-align'): Promise<HTMLIonToastElement> {
    const toast = await this.toastController.create({
      message,
      position,
      color,
      duration,
      cssClass
    });
    return toast;
  }
}
