import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
  showPassword: boolean;
  showNewPassword: boolean;
  showNewPasswordRepeat: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
