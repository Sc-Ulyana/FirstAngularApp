import {Injectable} from '@angular/core';
import {User} from "../domain/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, first, firstValueFrom, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl,user,this.httpOptions)
  }

  deleteUser(login: string): Observable<User> {
    const url = `${this.usersUrl}/?login=${login}`;
    return this.http.delete<User>(url, this.httpOptions)
  };

  updateUser(user: User): Observable<any>{
    return this.http.put(this.usersUrl, user, this.httpOptions)
  }

  //
  // getUserByLogin(login: string): Observable<User> {
  //   const user = this.users.find(u=>u.login===login)!;
  //   return of(user);
  // }
  //

}
