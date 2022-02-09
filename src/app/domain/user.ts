import {Role} from "./role";

export class User {
  id: number;
  login: string;
  password: string;
  name: string;
  email: string;
  date: Date|undefined;
  salary: number|undefined;
  roles: Role[];

  constructor(id: number, login: string, password: string, name: string, email: string, salary: number|undefined, date: Date|undefined, roles: Role[]) {
    this.id = id;
    this.login = login;
    this.password = password
    this.roles = roles;
    this.date = date;
    this.salary = salary;
    this.email = email;
    this.name = name;
  }
}
