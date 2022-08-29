/* eslint-disable @typescript-eslint/member-ordering */
// tslint:disable:no-redundant-jsdoc
import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  isDesktop = new BehaviorSubject<boolean>(false);
  public widthSize = new BehaviorSubject<number>(window.innerWidth);
  public heightSize = new BehaviorSubject<number>(window.innerHeight);

  constructor() {
    console.log(this.widthSize.value, this.heightSize.value);
    this.onResize(this.widthSize.value, this.heightSize.value);
  }


  @HostListener('window:resize', ['$event'])
  redoResize(event: any) {
    this.onResize(event.target.innerWidth, event.target.innerHeight);
    console.log(event.target);
  }

  @HostListener('window:orientationchange', ['$event'])
  redoOrientationChange(event: any) {
    this.onResize(event.target.innerWidth, event.target.innerHeight);
  }

  /**
   *
   *
   * @param size
   * @memberof ScreenSizeService
   */
  onResize(widthSize: number, heightSize: number): void {
    // if (size < 568) {
    // if (size < 801) {
    if (widthSize < 992) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
    this.widthSize.next(widthSize);
    this.heightSize.next(heightSize);
    console.log(this.widthSize.value, widthSize, this.isDesktop.value);
  }

  /**
   *
   *
   * @returns
   * @memberof ScreenSizeService
   */
  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }


}
