import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  user: User;

  constructor(private titleService:Title, private route: ActivatedRoute, private userService: UserService, private http: HttpClient) {
    this.titleService.setTitle("Delete User")
  }

  ngOnInit(): void {

  }
}
