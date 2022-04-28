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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule ],
  providers: [
    // AuthServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
