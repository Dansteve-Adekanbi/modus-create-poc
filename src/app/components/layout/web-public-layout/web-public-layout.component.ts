import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@app-environments/environment';
import { ScreenSizeService } from '@app-services/screen-size/screen-size.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-web-public-layout',
  templateUrl: './web-public-layout.component.html',
  styleUrls: ['./web-public-layout.component.scss'],
})
export class WebPublicLayoutComponent implements OnInit {

  isPwa: Readonly<boolean>;
  isDesktop: boolean;

  constructor(
    public screenSizeService: ScreenSizeService,
    public navController: NavController,
    public router: Router,
  ) {
    this.isPwa = environment.isPwa;
    this.screenSizeService.isDesktopView().subscribe(isDesktop => {
      console.log('isDesktop', isDesktop);
      if (this.isDesktop && !isDesktop) {
        // window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() { }

}
