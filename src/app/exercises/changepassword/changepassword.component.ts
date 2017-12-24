import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { PasswordValidators} from "./password.validators";

@Component({
  selector: 'rkm-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent  {

  constructor() { }

  passwordForm = new FormGroup({

      userAccount: new FormGroup({
        oldpassword: new FormControl('', [
          Validators.required
        ]),
        newpassword: new FormControl('',[
          Validators.required
        ]),
        confirmpassword: new FormControl('', [
          Validators.required
          ])

        })
  });

    get oldpassword(){
      return this.passwordForm.get('userAccount.oldpassword');
    }

    get newpassword(){
      return this.passwordForm.get('userAccount.newpassword');
    }

    get confirmpassword(){
      return this.passwordForm.get('userAccount.confirmpassword');
    }




}
