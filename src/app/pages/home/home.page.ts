import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '@app-environments/environment';
import { LoginPayload } from '@app-models/api.interface';
import { FormValidatorService } from '@app-services/form-validator/form-validator.service';
import { ScreenSizeService } from '@app-services/screen-size/screen-size.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isPwa: Readonly<boolean>;
  isDesktop: boolean;
  userLoginForm: UntypedFormGroup;
  user: LoginPayload = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(
    public screenSizeService: ScreenSizeService,
    public navController: NavController,
    public router: Router,
    public fb: UntypedFormBuilder,
    public loadingController: LoadingController,
  ) {
    this.isPwa = environment.isPwa;
    this.screenSizeService.isDesktopView().subscribe(isDesktop => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, FormValidatorService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  async login() {
    // Do Something
  }

}
