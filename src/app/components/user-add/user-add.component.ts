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
  minDate: Date;
  maxDate: Date;
  users: User[];
  password: string;

  constructor(private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("User add")
  }

  ngOnInit() {
    this.minDate = new Date();
    this.minDate.setMonth(1);
    this.minDate.setFullYear(1950);
    this.maxDate = new Date();
    this.maxDate.setMonth(1);
    this.maxDate.setFullYear(2004);
  }

  addUser(login: string, password: string){
    this.userService.addUser({login} as User).subscribe(
      response => this.users.push(response)
    )
  }
}
