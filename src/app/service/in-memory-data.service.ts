import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [{
      id: 1,
      name: 'Admin',
      login: 'admin',
      password: 'admin',
      email: 'admin@email.com',
      salary: 3000,
      date: new Date(2000,12,12),
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    },
      {
        id: 2,
        name: 'Petr',
        login: 'petya',
        password: '12345',
        email: 'petya@email.com',
        salary: 1200,
        date: new Date(1996,2,1),
        roles: ['ROLE_DEVELOPER']
      },
      {
        id: 3,
        name: 'Vasya',
        login: 'vasya',
        password: '12345',
        email: 'vasya@email.com',
        salary: 3200,
        date: new Date(1981,4,15),
        roles: ['ROLE_MANAGER']
      }
    ];
    return {users};
  }
}
