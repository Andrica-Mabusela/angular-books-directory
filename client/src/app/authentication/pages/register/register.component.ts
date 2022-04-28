import { Component, OnInit } from '@angular/core';
import { UserPersonalDetails } from '../../models/user-personal-details';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router'

import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    console.log(this.registrationForm.get('password')?.errors?.['required']);
  }

  inputFieldValidator(testPattern: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isValid = testPattern.test(control.value);

      return isValid ? { patternValid: { value: control.value } } : null;
    };
  }

  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.authService.register(myForm.value).subscribe((response) => {
        console.log(response);
        if(response.success) {
          this.router.navigateByUrl('')
        }
      });
    } else {
      console.log('form is not valid');
    }
  }
}
