import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {LoginUser} from '../models/login.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUser(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
    
  }
  createUser(date: User): Observable<any>{
    return this.http.post<any>(this.baseUrl, date)
  }
  // createUser1(date: LoginUser): Observable<any>{
  //   return this.http.post<any>(this.baseUrl, date)
  // }
}
