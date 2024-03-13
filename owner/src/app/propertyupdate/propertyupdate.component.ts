import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-propertyupdate',
  templateUrl: './propertyupdate.component.html',
  styleUrls: ['./propertyupdate.component.css']
})
export class PropertyupdateComponent implements OnInit {

  update:number = NaN;
  properties:Property;
  constructor(private route:ActivatedRoute, private router:Router, private propertyService:PropertyService, ) {
    this.properties = {'propid':0,'propname':'','proplocation':'','propsize':'','propfeatures':'','proptype':'','image1':'','image2':'','image3':'','price':0,'ratings':0,
    'owner':{'ownerid':0, 'ownerfname':'', 'ownerlname':'', 'ownerlocation':'', 'ownerphone':'', 'owneremail':'','password':''}};
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.update = parseInt(<string>param.get('update'));
      console.log(this.update, "from property");
      this.propertyService.getProperty(this.update).subscribe(property=>{this.properties = property; console.log(this.properties)})
    });

  }

  updateProperty(){

    if(this.propertyService.updateProperty(this.properties)){
      alert('Property updated');
      this.router.navigate(['ownerproperty']);
    }
    else{
      alert("Property can't be updated, please try later");
    }
    

  }





}
