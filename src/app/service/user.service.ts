import {Injectable} from '@angular/core';
import {User} from "../domain/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {elementAt, Observable} from "rxjs";
import {Role} from "../domain/role";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';  // URL to web api
  private rolesUrl = 'api/roles';

  private users: User[] = [];
  private roles: Role[] = [];

  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    )
  };

  constructor(
    private http: HttpClient) {
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/webdipatch/users/", this.httpOptions);
  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>("http://localhost:8080/webdipatch/roles/", this.httpOptions);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>("http://localhost:8080/webdipatch/users/" + id, this.httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/webdipatch/users/newUser", user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>("http://localhost:8080/webdipatch/users/" + id, this.httpOptions);
  }

  changePassword(pass: Object): Observable<Object>{
    console.log(pass)
    return  this.http.put("http://localhost:8080/webdipatch/changePassword/", pass, this.httpOptions);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put("http://localhost:8080/webdipatch/users/" + id, user, this.httpOptions);
  }

  getUserForAuthorization(login: string, password: string): Observable<Object>{
    return this.http.post("http://localhost:8080/webdipatch/auth/",{login,password});
  }

  checkUserForAuthorization(): Observable<Object> {
    return this.http.get("http://localhost:8080/webdipatch/validate", this.httpOptions);
  }
}
