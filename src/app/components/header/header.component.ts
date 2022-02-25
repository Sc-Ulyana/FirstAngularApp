import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit{
  isAdmin: boolean;
  items: MenuItem[] = [];
  title: string;

  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
    this.translate.get('menu.welcome').subscribe((text: string) => {
      this.title = text;
    });
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      this.primengConfig.ripple = true;
      this.translate.instant('menu.welcome')
      this.items = this.buildMenuItems();
    });
    if (this.items.length == 0) {
      this.primengConfig.ripple = true;
      if (this.translate.currentLang == null) {
        this.translate.use(this.translate.getDefaultLang());
      } else {
        this.translate.use(this.translate.currentLang)
      }
      this.translate.instant('menu.welcome')
      this.items = this.buildMenuItems();
    }
  }

  buildMenuItems(): MenuItem[] {
    return this.items = [
      {
        label: this.translate.instant('menu.welcome'),
        icon: 'pi pi-arrow-left',
        routerLink: '/welcome',
      },
      {
        label: this.translate.instant('menu.usersList'),
        icon: 'pi pi-users',
        routerLink: '/users',
        visible: this.isCurrentUserAdmin()
      },
      {
        label: this.translate.instant('menu.passwordChange'),
        icon: 'pi pi-pencil',
        routerLink: "/password-edit"
      },
      {
        label: this.translate.instant('menu.exit'),
        icon: 'pi pi-sign-in',
        command: onclick => localStorage.clear(),
        routerLink: "/login",
      }
    ];
  }

  langChange(lang: string) {
    this.translate.use(lang);
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

