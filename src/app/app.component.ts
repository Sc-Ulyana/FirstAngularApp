import {Component} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'FirstAngularApp';

  items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      {
        label:'Main',
        icon: 'pi pi-arrow-left',
        url: '/welcome'
      },
      {
        label: 'Users list',
        icon:  'pi pi-users',
        url: '/users'
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
}
