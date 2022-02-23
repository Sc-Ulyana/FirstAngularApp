import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userLogin: any;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Welcome")
  }

  ngOnInit(): void {
    this.userLogin = localStorage.getItem("login");
  }

}
