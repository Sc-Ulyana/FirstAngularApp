import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {BadgeModule} from "primeng/badge";
import {InputNumberModule} from "primeng/inputnumber";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StyleClassModule} from "primeng/styleclass";
import {AppComponent} from './app.component';
import {PasswordEditComponent} from './components/password-edit/password-edit.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {UsersComponent} from './components/users/users.component';
import {HeaderComponent} from './components/header/header.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {FooterComponent} from './components/footer/footer.component';
import {ErrorComponent} from './components/error/error.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {NotificationComponent} from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    UsersComponent,
    UserEditComponent,
    UserDeleteComponent,
    ErrorComponent,
    UserAddComponent,
    PasswordEditComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    AppRoutingModule,
    BadgeModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    PanelModule,
    MenuModule,
    TableModule,
    RippleModule,
    StyleClassModule,
    ReactiveFormsModule, MessageModule, MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
