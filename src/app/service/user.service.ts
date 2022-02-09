import {Injectable} from '@angular/core';
import {User} from "../domain/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {elementAt, Observable} from "rxjs";
import {Role} from "../domain/role";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private roles: Role[] = [];


  constructor() {
    this.roles.push(
      new Role(1, 'ROLE_ADMIN'),
      new Role(2, 'ROLE_USER'),
      new Role(3, 'ROLE_DEVELOPER'),
      new Role(4, 'ROLE_MANAGER'),
      new Role(5, 'ROLE_TRAINEE'))
    this.users.push(
      new User(1, 'admin', 'admin', 'Admin', 'admin@email.com', 3000, new Date(2000, 1, 12), [this.roles[0], this.roles[1]]),
      new User(2, 'petya', '12345', 'Petr', 'petya@email.com', 1200, new Date(1982, 2, 17), [this.roles[1], this.roles[2]]),
      new User(3, 'vasya', '12345', 'Vasya', 'vasya@email.com', 2500, new Date(1993, 12, 21), [this.roles[3]])
    )
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getAllRoles(): Role[] {
    return this.roles;
  }

  getUser(id: number): User {
    let user = new User(0, '', '', '', '', 0, new Date(), []);
    this.users.forEach((element) => {
        if (
          element.id == id) {
          user = element;
        }
      }
    )
    return user;
  }

  updateUser(user: User): void {
    this.users.push(user);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(id: number): void {
    this.users.forEach((element) => {
      if (element.id == id) {
        const index = this.users.indexOf(element, 0);
        if (index > -1) {
          this.users.splice(index, 1);
        }
      }
    });
  }

  // addUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.usersUrl, user, httpOptions)
  // }
  //
  // deleteUser(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/${id}`;
  //   return this.http.delete<User>(url, httpOptions)
  // };
  //
  // updateUser(user: User): Observable<any>{
  //   return this.http.put(this.usersUrl, user, httpOptions);
  // }

  // getUserByLogin(login: string): Observable<User> {
  //   const user = this.users.find(u=>u.login===login)!;
  //   return of(user);
  // }
  //
}
