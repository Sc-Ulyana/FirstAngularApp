import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../service/user.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAdmin = false;
    if (localStorage.getItem("token") != null) {

      // @ts-ignore
      JSON.parse(window.atob(localStorage.getItem("token").split('.')[1])).roles?.forEach(element => {

        if (element.name == 'ROLE_ADMIN')
          isAdmin = true
      })
    } else {
      console.log("no token")
      return false;
    }


    if (isAdmin) {
      return true
    } else{
      return this.router.navigateByUrl("/welcome");;
    }
  }
}
