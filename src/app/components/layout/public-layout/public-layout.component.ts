import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@app-environments/environment';
import { ScreenSizeService } from '@app-services/screen-size/screen-size.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
})
export class PublicLayoutComponent implements OnInit {

  readonly isPwa: Readonly<boolean> = environment.isPwa;
  isDesktop: boolean;

  constructor(
    public screenSizeService: ScreenSizeService,
    public navController: NavController,
    public router: Router,
  ) {

    this.screenSizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() {
    //noop
  }

}
