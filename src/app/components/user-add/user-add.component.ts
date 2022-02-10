import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";
import {Role} from "../../domain/role";
import {AlertService} from "../../service/alert.service";
import {Router} from "@angular/router";

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
  allRoles: Role[];

  constructor(private titleService: Title, private userService: UserService, private alertService: AlertService,
              private router: Router) {
    this.titleService.setTitle("User add")
  }

  ngOnInit() {
    this.minDate = new Date(1950, 1);
    this.maxDate = new Date(2004, 1);
    this.getAllRoles()
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(user => { this.user = user
    this.alertService.success("User was added")});
    this.router.navigate(["/users"]);
  }


  getAllRoles(): void {
    this.userService.getAllRoles().subscribe(roles => this.allRoles = roles)
  }
}
