import { HttpClient, HttpHeaders, HttpParams,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../model/Mail';
import { Property } from '../model/Property';
import { ReservedProperty } from '../model/ReservedProperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  messageurl:string;
  url:string;
  mail:Mail;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private router:Router, private http:HttpClient) { 
    this.url = 'http://localhost:8002/propertyservice/'
    this.messageurl = 'http://localhost:8003/messageservice/'
    this.mail = {'sendmail':'','body':''}
  }

  sendmailToOwner(to:string, body:string):Observable<any>{
    console.log(to, body)
    this.mail = {'sendmail':to, 'body':body};
    return this.http.post<Mail>(this.messageurl + "sendmail", this.mail);
  }


  getProperties(){
    return this.http.get<Property[]>(this.url + 'properties');
  }

  getPropertiesByOwner(owner_ownerid:number):Observable<Property[]>{
    return this.http.get<Property[]>(this.url + 'properties/' + owner_ownerid);
  }

  registerProperty(property:Property){
    return this.http.post<Property>(this.url + 'property', property)
  }

  savePropertyData(prop: FormData): Observable<any> {
    console.log('In service owner');
    console.log(prop);
    return this.http.post(this.url + 'propertyadd', prop);
  }


  reserveProperty(reserve:ReservedProperty){
    return this.http.post<ReservedProperty>(this.url + 'reserve', reserve,{headers:this.headers});
  }

  propertyReservedByUser(userid:number){
    return this.http.get<ReservedProperty[]>(this.url + 'reservedproperties/' + userid);
  }


  getProperty(propid:number):Observable<Property> {
    return this.http.get<Property>(`${this.url}property/${propid}`);
  }

  updateProperty(updateproperty:Property){
    console.log(updateproperty)
    return this.http.put<Property>(this.url + 'property', updateproperty, {headers: this.headers}).subscribe(data=>{return data});
  }

  deleteProperty(del:number){
    return this.http.delete(this.url + 'property/' + del);
  }
}
