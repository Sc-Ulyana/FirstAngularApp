import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  stringA: string;

  items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.isCurrentUserAdmin();
    console.log(this.isCurrentUserAdmin());
    this.primengConfig.ripple = true;

    this.items = [
      {
        label: 'Main',
        icon: 'pi pi-arrow-left',
        url: '/welcome'
      },
      {
        label: 'Users list',
        icon: 'pi pi-users',
        url: '/users',
        visible: this.isCurrentUserAdmin()
      },
      {
        label: 'Change password',
        icon: 'pi pi-pencil',
        url: '/password-edit'
      },
      {
        label: 'Exit',
        icon: 'pi pi-sign-in',
        url: "/login"
      }
    ]
  }

  isCurrentUserAdmin(): boolean {
    this.isAdmin = false;
    //@ts-ignore
    JSON.parse(window.atob(localStorage.getItem('token').split('.')[1])).roles?.forEach(element => {
      if (element.name == "ROLE_ADMIN") {
        this.isAdmin = true;
      }
    });
    return this.isAdmin;
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}

