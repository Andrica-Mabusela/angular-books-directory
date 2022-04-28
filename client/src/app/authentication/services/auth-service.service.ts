import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

const baseUrl = 'http://localhost:4000'

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  register(userCredentials: any) : Observable<any> {
    return this.http.post<any>(`${baseUrl}/auth/register`, userCredentials);
  }

  login(userCredentials: any) : Observable<any>{
    return this.http.post<any>(`${baseUrl}/auth/login`, userCredentials);
  }

}
