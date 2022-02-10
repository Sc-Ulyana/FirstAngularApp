import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {UserService} from "../../service/user.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private titleList: Title, private userService: UserService) {
    this.titleList.setTitle("Users list");
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
    console.log(this.users)
  }

}
