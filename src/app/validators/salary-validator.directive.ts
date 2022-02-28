import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidatorFn} from "@angular/forms";
import {UserService} from "../service/user.service";

@Directive({
  selector: '[salaryValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SalaryValidatorDirective,
    multi: true
  }]
})
export class SalaryValidatorDirective {

  validator: ValidatorFn;

  constructor() {
    this.validator = this.salaryValidator();
  }


  validate(c: FormControl) {
    return this.validator(c);
  }


  salaryValidator(): ValidatorFn {
    // @ts-ignore
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        if (control.value<1000|| control.value>12000) {
          return {
            salaryValidator: {valid: false}
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
