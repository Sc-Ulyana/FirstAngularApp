import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {
  showPassword: boolean;
  showNewPassword: boolean;
  showNewPasswordRepeat: boolean;
  errorMessage: string;

  form: any = {
    passwordNew: null,
    passwordNewRep: null
  };


  constructor(private userService: UserService, private router: Router, private noteService: NotificationService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {passwordOld, passwordNew, passwordNewRep} = this.form;
    if (passwordNew != passwordNewRep) {
      this.noteService.error("Passwords not equal");
    } else {
      let pass = {
        "oldPass": passwordOld,
        "newPass": passwordNew,
        "newPassRepeat": passwordNewRep
      }
      this.userService.changePassword(pass).subscribe((res) => {
          if (res) {
            this.noteService.success("Password change");
            this.router.navigateByUrl("/welcome");
          } else {
            this.noteService.error("Old password is incorrect");
          }
        }
      );
    }
  }

  checkCoincide(passwordNew: any, passwordNewRep: any): boolean {
    return passwordNew != passwordNewRep;
  }
}
