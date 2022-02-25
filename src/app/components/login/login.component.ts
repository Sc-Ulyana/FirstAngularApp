import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  showPassword: boolean;
  private incorrect: string;
  private success: string;

  isLoginFailed = false
  isLoggedIn = false

  form: any = {
    login: null,
    password: null
  }

  constructor(private titleService: Title, private userService: UserService, private router: Router,
              private noteService: NotificationService, private translate: TranslateService) {
    this.titleService.setTitle("Log In");
    this.translate.get('messages.incorrect').subscribe((text: string) => {
      this.incorrect = text;
    });
    this.translate.get('messages.success').subscribe((text: string) => {
      this.success = text;
    });
  }

  ngOnInit(): void {
  }

  langChange(lang: string) {
    this.translate.use(lang);
  }


  onSubmit() {
    const {login, password} = this.form;

    this.userService.getUserForAuthorization(login, password).subscribe(data => {
        // @ts-ignore
        localStorage.setItem("token", data.token);
        localStorage.setItem("currentUserLogin", login);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.noteService.success(this.success);
        this.router.navigateByUrl('/welcome');
      },
      err => {
        this.noteService.error(this.incorrect)
        this.isLoginFailed = true;
      })

  }
}
