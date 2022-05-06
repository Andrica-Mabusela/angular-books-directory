import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { AppService } from 'src/app/services/app.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private appService: AppService, private http: HttpClient) { }

  ngOnInit(): void {
  
    this.appService.getBooks().subscribe( data => {
      console.log(data)
    })
    
  }

}
