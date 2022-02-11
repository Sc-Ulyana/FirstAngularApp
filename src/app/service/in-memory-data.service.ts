import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const roles = [
      {id: 1, name: 'ROLE_ADMIN'},
      {id: 2, name: 'ROLE_USER'},
      {id: 3, name: 'ROLE_DEVELOPER'},
      {id: 4, name: 'ROLE_MANAGER'},
      {id: 5, name: 'ROLE_TRAINEE'}
    ]
    const users = [
      {
        id: 1,
        login: 'admin',
        password: 'admin',
        name: 'Admin',
        email: 'admin@email.com',
        salary: 3000,
        date: new Date(2000, 1, 12),
        roles: [roles[0], roles[1]]
  },
    {
      id: 2,
      login: 'petya',
      password: '12345',
      name: 'Petr',
      email: 'petya@email.com',
      salary: 1200,
      date: new Date(1982, 2, 17),
      roles: [roles[1], roles[2]]
    }
  ,
    {
      id: 3,
      login: 'vasya',
      password: '12345',
      name: 'Vasya',
      email: 'vasya@email.com',
      salary: 2500,
      date: new Date(1993, 12, 21),
      roles: [roles[3]]
    }
  ]
    ;
    return {users, roles};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
