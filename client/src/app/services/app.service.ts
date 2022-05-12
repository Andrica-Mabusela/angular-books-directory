import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:4000'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  
  getBooks() {
    const authToken = localStorage.getItem('auth-token')
   
    const options =  { headers: new HttpHeaders({'Authorization': `${authToken}`})}
    console.log('headers',options)
    return  this.http.get(`${baseUrl}`, options)
  }

}
