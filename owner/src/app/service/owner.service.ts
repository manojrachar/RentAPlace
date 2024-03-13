import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/Login';
import { Owner } from '../model/Owner';
import { Messages } from '../model/Messages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  url:string;

  constructor(private router:Router, private http:HttpClient) { 
    this.url = 'http://localhost:8002/ownerservice/' 
  }

  isLoggedIn(){
    return !!localStorage.getItem('owneremail');
  }
  
  validateLogin(login:Login):Observable<Messages>{
    console.log(login)
    return this.http.post<Messages>(this.url+'authenticate/',login);
  
  }

  registerOwner(regowner:Owner){
    return this.http.post<Owner>(this.url + 'owner', regowner);
  }

  getOwnerByEmail(email:string){
    return this.http.get<Owner>(this.url + 'owner/' + email);
  }

  getAllUsers(){
    return this.http.get<Owner[]>(this.url + 'owners');
  }

  updateOwner(owner:Owner){
    return this.http.put<Owner>(this.url + 'owner', owner).subscribe(data=>{ return data});
  }

  
  logout() {
  
    localStorage.removeItem('email');
    this.router.navigate(['login']);

  }
}
