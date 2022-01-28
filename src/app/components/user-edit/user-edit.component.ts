import {Component, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {User} from "../../domain/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  user: User;
  newLogin: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private userService: UserService, private http: HttpClient, private location: Location) {
    this.titleService.setTitle("Edit user");
  }

  ngOnInit(): void {
    this.minDate = new Date(1955,1,1);
    this.maxDate = new Date(2004,1,1);
    this.getUser();
  }

  getUser(): void{
    const id = parseInt(this.route.snapshot.queryParamMap.get('userToEdit')!, 10);
    this.userService.getUser(id).subscribe(user=>
    {this.user = user;
      this.user.date = new Date(user.date);
    });
  }

  updateUser(): void{
    if(this.user){
      this.userService.updateUser(this.user).subscribe(()=>this.goBack())
        console.log(this.user)
  }
  }

  goBack():void{
    this.location.back();
  }
}

