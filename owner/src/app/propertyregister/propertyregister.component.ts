import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from '../model/Owner';
import { Property } from '../model/Property';
import { OwnerService } from '../service/owner.service';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-propertyregister',
  templateUrl: './propertyregister.component.html',
  styleUrls: ['./propertyregister.component.css']
})
export class PropertyregisterComponent implements OnInit {

  owner:Owner;
  email:any;
  constructor(private ps: PropertyService, private ownerService: OwnerService, private router:Router) {
    this.owner = {'ownerid':0};
   
   }

  public image1: any = File;
  public image2: any = File;
  public image3: any = File;

  onSelectImage1(event:any) {
    const file = event.target.files[0];
    this.image1 = file;
    console.log(this.image1);
  }

  onSelectImage2(event:any) {
    const file = event.target.files[0];
    this.image2 = file;
    console.log(this.image2);
  }

  onSelectImage3(event:any) {
    const file = event.target.files[0];
    this.image3 = file;
    console.log(this.image3);
  }

  saveForm(submitform: Property) {
    console.log(submitform);
    const fd = new FormData();
    fd.append("image1",this.image1);
    fd.append("image2",this.image2);
    fd.append("image3",this.image3);
    fd.append("prop",new Blob([
      JSON.stringify(submitform)
    ],{
      type:'application/json'
    }));
    this.ps.savePropertyData(fd).subscribe
      (data => console.log(data));
    this.router.navigate(['ownerproperty']);
  }

  saveOwner(ownerSubmit: Owner) {
    console.log(ownerSubmit);
    this.ownerService.registerOwner(ownerSubmit).subscribe
      (data => console.log(data));
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('owneremail');
    this.ownerService.getOwnerByEmail(this.email).subscribe(data => {
    this.owner.ownerid = data.ownerid;
    console.log('ownerid ',this.owner.ownerid);
    });
    console.log(this.owner)
    
  }


  
  // property:Property;
  // constructor(private propertyService:PropertyService, private router:Router) { 
  //   this.property = {'propid':0,'propname':'','proplocation':'','propsize':'','propfeatures':'','proptype':'','image1':'','image2':'','image3':'','price':0,'ratings':0,
  //   'owner':{'ownerid':0}};  
  // }

  // ngOnInit(): void {
  // }

  // register(){
  //   console.log(this.property)
  //   this.propertyService.registerProperty(this.property).subscribe(data=>console.log(data))
  //   this.router.navigate(['ownerproperty']);
  // }
}
