import { FormGroup } from "@angular/forms";

export class comparePasswordsService {
  static validate(passwordForm: FormGroup) {
    console.log(passwordForm.controls);
    let password = passwordForm.controls.password.value;
    let confirmPassword = passwordForm.controls.confirmPassword.value;

    if (confirmPassword.length <=0) {
      return null;
    }
    if (confirmPassword !== password) {
      return {
        doesMatchPassword: true
      };
    }
  }
}
