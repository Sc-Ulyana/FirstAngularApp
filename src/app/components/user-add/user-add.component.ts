import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";
import {Role} from "../../domain/role";
import {Router} from "@angular/router";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  showPassword: boolean;
  minDate: Date;
  maxDate: Date;
  message: string;
  user: User = new User(0, '', '', '', '', undefined, undefined, []);
  allRoles: Role[];

  form: any = {
    login: null,
    password: null,
    name: null,
    email: null,
    salary: null,
    dateOfBirth: null,
    roles: null
  };

  constructor(private titleService: Title, private userService: UserService, private router: Router,
              private noteService: NotificationService) {
    this.titleService.setTitle("User add")
  }

  ngOnInit() {
    this.minDate = new Date(1950, 1);
    this.maxDate = new Date(2004, 1);
    this.getAllRoles()
  }

  getAllRoles(): void {
    this.userService.getAllRoles().subscribe(roles => this.allRoles = roles)
  }

  onSubmit(addUser: NgForm) {
    const {login, password, name, email, salary, dateOfBirth, roles} = this.form;

    console.log(this.user);
    this.userService.addUser(this.user).subscribe(user => {
      this.noteService.success( "User " + `${this.user.login}` + " was added");
      this.user = user;
    });
    this.router.navigateByUrl("/users");
  }

}
