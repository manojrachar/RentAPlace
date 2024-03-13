import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';
import { OwnerService } from '../service/owner.service';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-userproperty',
  templateUrl: './userproperty.component.html',
  styleUrls: ['./userproperty.component.css']
})
export class UserpropertyComponent implements OnInit {

  ownerid: number = 0;
  searchText: string = '';
  email: any;
  properties: Property[];
  baseurl:string='http://localhost:8002/propimages/'

  constructor(private router: Router, private propertyService: PropertyService, private route: ActivatedRoute, private ownerService: OwnerService) {
    this.properties = [];
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      let search: string = <string>param.get('search');
      this.searchText = search;
      console.log(search, "from userproperty");
    })
    this.email = localStorage.getItem('useremail');
    
      this.propertyService.getProperties().subscribe(data => {
        this.properties = data;
        console.log(this.properties);
      })
     
  }

  reserve(reserve:number){
    this.router.navigate(['reserveproperty',reserve]);
  }


  userLoggedin() {
    if (this.ownerService.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }

}
