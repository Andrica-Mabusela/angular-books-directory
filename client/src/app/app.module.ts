import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { LoginComponent } from './authentication/pages/login/login.component';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptorProvider } from './auth.interceptor';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, HomePageComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule ],
  providers: [
    // AuthServiceService
    // AuthInterceptorProvider,
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
