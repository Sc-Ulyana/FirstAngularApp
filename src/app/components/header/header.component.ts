import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  items: MenuItem[] = [];


  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {

  }

  ngOnInit() {
    this.isCurrentUserAdmin();
    console.log(this.isCurrentUserAdmin());
    this.primengConfig.ripple = true;
    console.log(this.translate.translations['menu.header']);
    this.items = [
      {
        label: this.translate.instant('menu.welcome'),
        icon: 'pi pi-arrow-left',
        url: '/welcome',
      },
      {
        label: this.translate.instant('menu.usersList'),
        icon: 'pi pi-users',
        url: '/users',
        visible: this.isCurrentUserAdmin()
      },
      {
        label: this.translate.instant('menu.passwordChange'),
        icon: 'pi pi-pencil',
        url: '/password-edit'
      },
      {
        label: this.translate.instant('menu.exit'),
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

