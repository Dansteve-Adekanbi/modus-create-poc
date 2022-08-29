import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { isValidEmail, isValidName } from '@app-utils/form-validator';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {
  constructor(
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
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      minlength: `minlength ${validatorValue.requiredLength}`,
      maxlength: `maxlength ${validatorValue.requiredLength}`,
    };

    return errorMessages[validatorName];
  }
}
