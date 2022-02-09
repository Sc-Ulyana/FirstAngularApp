import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  showPassword: boolean;
  minDate: Date;
  maxDate: Date;
  user: User = new User(0, '', '', '', '', undefined, undefined, []);
  allRoles: any[] = [];

  constructor(private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("User add")
  }

  ngOnInit() {
    this.minDate = new Date(1950, 1);
    this.maxDate = new Date(2004, 1);
    this.allRoles = this.userService.getAllRoles()
  }

  addUser() {
    this.userService.addUser(this.user);
  }
}
