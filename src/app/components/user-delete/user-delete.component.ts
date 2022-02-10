import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../service/alert.service";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  user: User;

  constructor(private titleService: Title, private route: ActivatedRoute, private userService: UserService,
              private alertService: AlertService, private router: Router) {
    this.titleService.setTitle("Delete User")
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.queryParamMap.get('userToDelete')!, 10);
    this.userService.getUser(id).subscribe(user => this.user = user);
  };

  deleteUser(): void {
    const id = parseInt(this.route.snapshot.queryParamMap.get('userToDelete')!, 10);
    this.userService.deleteUser(id).subscribe(user => {
      this.user = user
      this.router.navigate(["/users"]);
      this.alertService.success("User was deleted")
    });
  }
}
