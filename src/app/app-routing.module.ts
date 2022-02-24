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
import {AdminGuard} from "./guards/admin.guard";
import {LoginGuard} from "./guards/login.guard";
import {AuthorizedGuard} from "./guards/authorized.guard";

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'welcome', component: WelcomeComponent, canActivate: [AuthorizedGuard]},
    {path: 'users', component: UsersComponent, canActivate: [AuthorizedGuard, AdminGuard]},
    {path: 'user-add', component: UserAddComponent, canActivate: [AuthorizedGuard, AdminGuard]},
    {path: 'user-edit', component: UserEditComponent, canActivate: [AuthorizedGuard, AdminGuard]},
    {path: 'user-delete', component: UserDeleteComponent, canActivate: [AuthorizedGuard, AdminGuard]},
    {path: 'password-edit', component: PasswordEditComponent, canActivate: [AuthorizedGuard]},
    {path: '**', component: ErrorComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
