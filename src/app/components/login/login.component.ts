import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Log In")
  }

  ngOnInit(): void {
  }

}
