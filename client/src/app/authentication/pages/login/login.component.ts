import { Component, OnInit } from '@angular/core';
// import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

import { Router } from '@angular/router';

import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  user: any;
  loggedIn: any;
  loginForm!: FormGroup;

  ngOnInit(): void {
    // this.socialAuthservice.authState.subscribe((user) => {
    //     this.user = user;
    //     this.loggedIn = user != null;
    //   });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    console.log(this.loginForm.get('password')?.invalid);
    console.log(this.loginForm.get('password')?.touched);
  }

  onSubmit(myForm: any): void {
    if (myForm.valid) {
      this.authService.login(myForm.value).subscribe((response) => {
        console.log(response);
        if (response.success) {
          this.router.navigateByUrl('');
          localStorage.setItem('auth-token', response.authToken)
        }
      });
    }
  }

  // signInWithGoogle(){
  //   this.socialAuthservice.signIn(GoogleLoginProvider.PROVIDER_ID)
  // }

  // signOut(){
  //   this.socialAuthservice.signOut()
  // }

  // refreshToken(){
  //   this.socialAuthservice.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID)
  // }
}
