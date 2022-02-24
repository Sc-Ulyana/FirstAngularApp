import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  showPassword: boolean;

  isLoginFailed = false
  isLoggedIn = false

  form: any = {
    login: null,
    password: null
  }

  constructor(private titleService: Title, private userService: UserService, private router: Router,
              private noteService: NotificationService) {
    this.titleService.setTitle("Log In")
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const {login, password} = this.form;

    this.userService.getUserForAuthorization(login, password).subscribe(data => {
        // @ts-ignore
        localStorage.setItem("token", data.token);
        localStorage.setItem("currentUserLogin", login);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.noteService.success('Registration successful', true);
        this.router.navigate(['/welcome']);
      },
      err => {
      this.noteService.error("Username or password is incorrect")
        console.log('login failed');
        console.log(localStorage.getItem('token'));
        this.isLoginFailed = true;
      })
  }
}
