import {Directive} from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";
import {UserService} from "../service/user.service";
import {User} from "../domain/user";

@Directive({
  selector: '[loginValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LoginValidatorDirective,
    multi: true
  }]
})
export class LoginValidatorDirective implements Validator {
  users: User[];
  validator: ValidatorFn;

  constructor(private userService: UserService) {
    this.validator = this.findUserLoginValidator();
  }


  validate(c: FormControl) {
    return this.validator(c);
  }


  findUserLoginValidator(): ValidatorFn {
    // @ts-ignore
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        this.userService.getAllUsers().subscribe(data => {
          this.users = data;
        });
        if (this.users.find(x => x.login == control.value)) {
          return {
            loginValidator: {valid: false}
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
  }
}
