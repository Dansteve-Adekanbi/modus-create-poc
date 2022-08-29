import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { isValidEmail, isValidName } from '@app-utils/form-validator';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {
  constructor(
    public translate: TranslateService,
  ) { }

  public static firstNameValidator(control: AbstractControl) {
    if (isValidName(control)) {
      return null;
    } else {
      return { invalidFirstName: true };
    }
  }

  public static lastNameValidator(control: AbstractControl) {
    if (isValidName(control)) {
      return null;
    } else {
      return { invalidLastName: true };
    }
  }

  public static emailValidator(control: AbstractControl) {
    if (control.value && isValidEmail(control)) {
      return null;
    } else {
      return { required: true, invalidEmail: true };
    }
  }


  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const errorMessages = {
      required: this.translate.instant('FORM_VALIDATION.REQUIRED'),
      invalidFirstName: this.translate.instant('FORM_VALIDATION.FIRST_NAME_ERROR'),
      invalidLastName: this.translate.instant('FORM_VALIDATION.LAST_NAME_ERROR'),
      invalidEmail: this.translate.instant('FORM_VALIDATION.EMAIL_ERROR'),
      minlength: this.translate.instant('FORM_VALIDATION.MIN_LENGTH', { minLength: validatorValue.requiredLength }),
      maxlength: this.translate.instant('FORM_VALIDATION.MAX_LENGTH', { maxLength: validatorValue.requiredLength }),
    };

    return errorMessages[validatorName];
  }
}
