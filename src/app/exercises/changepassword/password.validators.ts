import {AbstractControl, ValidationErrors} from "@angular/forms";



export class PasswordValidators {

  static invalidPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve )=> {
      setTimeout(() => {
        if(control.value !== 'rkmPass'){
          resolve({invalidPassword: true});
        } else {
          resolve(null);
        }

      }, 2000);
    });
  }

  static passwordsMatch(control: AbstractControl): Promise<ValidationErrors | null>{
     let newPass = control.get('userAccount.newpassword');
     let confirmPass = control.get('userAccount.confirmpassword');

     console.log("NewPass ", newPass.value);
    console.log("ConfirmPass ", confirmPass.value);

     return new Promise((resolve) => {
       setTimeout(() => {
         if(newPass.value !== confirmPass.value)
           resolve({passwordsMatch: true});
           resolve(null);

       }, 2000)
     });
  }

}
