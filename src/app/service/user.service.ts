import {Injectable} from '@angular/core';
import {User} from "../domain/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {elementAt, Observable} from "rxjs";
import {Role} from "../domain/role";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';  // URL to web api
  private rolesUrl = 'api/roles';

  private users: User[] = [];
  private roles: Role[] = [];

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private alertService: AlertService) {
     }

  /** GET heroes from the server */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }


  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
  }


  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions);
  }

}
