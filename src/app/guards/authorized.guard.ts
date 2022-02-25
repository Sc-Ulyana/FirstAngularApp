import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NotificationService} from "../service/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  note: string;

  constructor(private router: Router, private noteService: NotificationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem("token") != null) {
      return true;
    } else {
      this.noteService.getAlert().subscribe(data=>
      {this.note=data;
        console.log(this.note);
      });
      this.noteService.error("Log in at first");
      return this.router.navigateByUrl("/login");
    }
  }
}
