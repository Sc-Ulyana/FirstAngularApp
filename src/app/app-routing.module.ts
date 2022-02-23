import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {UsersComponent} from "./components/users/users.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {UserDeleteComponent} from "./components/user-delete/user-delete.component";
import {ErrorComponent} from "./components/error/error.component";
import {AppComponent} from "./app.component";
import {UserAddComponent} from "./components/user-add/user-add.component";
import {PasswordEditComponent} from "./components/password-edit/password-edit.component";

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user-add', component: UserAddComponent},
    {path: 'user-edit', component: UserEditComponent},
    {path: 'user-delete', component: UserDeleteComponent},
    {path: 'password-edit', component: PasswordEditComponent},
    {path: '**', component: ErrorComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
