import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Role} from "../../domain/role";
import {AlertService} from "../../service/alert.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  showPassword: boolean;
  minDate: Date;
  maxDate: Date;
  user: User;
  newLogin: string;
  allRoles: Role[];

  constructor(private titleService: Title, private route: ActivatedRoute, private userService: UserService,
              private alertService: AlertService, private router: Router) {
    this.titleService.setTitle("Edit user");
  }

  ngOnInit(): void {
    this.minDate = new Date(1955, 1, 1);
    this.maxDate = new Date(2004, 1, 1);
    this.getUser();
    this.getAllRoles();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.queryParamMap.get('userToEdit')!, 10);
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(user => {
      this.user = user;
      this.router.navigate(["/users"]);
      this.alertService.success("User was deleted")
    });
  }

  getAllRoles(): void {
    this.userService.getAllRoles().subscribe(roles => this.allRoles = roles)
  }
}
