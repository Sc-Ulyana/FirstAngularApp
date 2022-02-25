import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {UserService} from "../service/user.service";
import {User} from "../domain/user";

@Directive({
  selector: '[login-validator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LoginValidatorDirective,
    multi: true
  }]
})
export class LoginValidatorDirective implements Validator{
  users: User[];

  constructor(private userService: UserService) { }

  validate(control: AbstractControl) : {[key: string]: any} | null {
    this.userService.getAllUsers().subscribe(data=> this.users = data);
    if (control.value && control.value.length === this.userService.getAllUsers()) {
      return { 'loginTaken': true };
    }
    return null;
  }


}
