import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {NotificationService} from "../../service/notification.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  user: User;
  private messageF: string;
  private messageS: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private userService: UserService,
              private router: Router, private noteService: NotificationService, private translate: TranslateService) {
    this.titleService.setTitle("Delete User");
    this.translate.get('messages.deleteUserF').subscribe((text: string) => {
      this.messageF = text;
    });
    this.translate.get('messages.deleteUserS').subscribe((text: string) => {
      this.messageS = text;
    });
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
      this.noteService.success( this.messageF + `${this.user.login}` + this.messageS);
      this.user = user
    });
    this.router.navigateByUrl("/users");
  }
}
