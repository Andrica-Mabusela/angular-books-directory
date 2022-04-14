import { Component, OnInit } from '@angular/core';
import { UserPersonalDetails } from '../../models/user-personal-details';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  x = 'sdcs'

  user = new UserPersonalDetails('alex', 'alex@gmail.com', '123')

  ngOnInit(): void {
    
  }


}
