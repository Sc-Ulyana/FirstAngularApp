import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {WelcomeComponent} from './components/welcome/welcome.component';
import {UsersComponent} from './components/users/users.component';
import {TableModule} from "primeng/table";
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {BadgeModule} from "primeng/badge";
import {UserDeleteComponent} from './components/user-delete/user-delete.component';
import {ErrorComponent} from './components/error/error.component';
import {InputNumberModule} from "primeng/inputnumber";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserAddComponent} from './components/user-add/user-add.component';
import {PasswordEditComponent} from './components/password-edit/password-edit.component';
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/in-memory-data.service";
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
    PasswordEditComponent
  ],
  imports: [
    AppRoutingModule,
    BadgeModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false}
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
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}
