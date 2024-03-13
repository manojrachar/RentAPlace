import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { User } from '../model/User';
import { Messages } from '../model/Messages';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;

  constructor(private router:Router, private http:HttpClient) { 
    this.url = 'http://localhost:8001/userservice/' 
  }

  isLoggedIn(){
    return !!localStorage.getItem('useremail');
  }
  
  validateLogin(login:Login):Observable<Messages>{
    console.log(login)
    return this.http.post<Messages>(this.url+'authenticate',login);
  }

  registerUser(register:User){
    console.log(register)
    return this.http.post<User>(this.url+'user',register).subscribe(data=>console.log(data));
  }

  getUserByEmail(email:string){
    return this.http.get<User>(this.url + 'user/' + email);
  }

  updateUser(user:User){
    return this.http.put<User>(this.url + 'user', user).subscribe(data=>{ return data});
  }
}
