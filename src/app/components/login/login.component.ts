import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  showPassword: boolean;
  form: any = {
    login: null,
    password: null
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle("Log In")
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const {login, password} = this.form;
  }
}
