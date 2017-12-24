import {AbstractControl, ValidationErrors} from "@angular/forms";
import set = Reflect.set;


export class PasswordValidators {

  static passwordIsUnique(control: AbstractControl): Promise<ValidationErrors | null> {


    setTimeout(() => {
      if(control.value === 'rkmPass')
        return {passwordIsUnique: true};
      return null;

    }, 2000);

    return null;

  }

}
