import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/pages/login/login.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { ForgotPasswordComponent } from './authentication/pages/forgot-password/forgot-password.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
