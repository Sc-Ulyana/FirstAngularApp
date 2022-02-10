import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/in-memory-data.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {BadgeModule} from "primeng/badge";
import {InputNumberModule} from "primeng/inputnumber";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {HttpClientModule} from "@angular/common/http";
import {StyleClassModule} from "primeng/styleclass";
import {AppComponent} from './app.component';
import {PasswordEditComponent} from './components/password-edit/password-edit.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {UsersComponent} from './components/users/users.component';
import {HeaderComponent} from './components/header/header.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {FooterComponent} from './components/footer/footer.component';
import {AlertComponent} from './components/alert/alert.component';
import {ErrorComponent} from './components/error/error.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";

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
    AlertComponent
  ],
  imports: [
    AppRoutingModule,
    BadgeModule,
    BrowserModule,
    HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
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
