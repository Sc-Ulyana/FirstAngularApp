import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Role} from "../../domain/role";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  message:string;
  showPassword: boolean;
  minDate: Date;
  maxDate: Date;
  user: User;
  newLogin: string;
  allRoles: Role[];

  constructor(private titleService: Title, private route: ActivatedRoute, private userService: UserService,
              private router: Router, private  noteService: NotificationService) {
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
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      //@ts-ignore
      this.user.dateOfBirth = new Date(user.dateOfBirth);
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.user.id, this.user).subscribe(user => {
      this.noteService.success( "User " + `${this.user.login}` + " was edited");
      this.user = user;
    });
    this.router.navigateByUrl("/users");
  }

  getAllRoles(): void {
    this.userService.getAllRoles().subscribe(roles => this.allRoles = roles)
  }
}
