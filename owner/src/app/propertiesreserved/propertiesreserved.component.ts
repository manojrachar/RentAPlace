import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';
import { ReservedProperty } from '../model/ReservedProperty';
import { OwnerService } from '../service/owner.service';
import { PropertyService } from '../service/property.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-proertiesreserved',
  templateUrl: './propertiesreserved.component.html',
  styleUrls: ['./propertiesreserved.component.css']
})
export class PropertiesreservedComponent implements OnInit {

  userid: number = 0;
  searchText: string = '';
  email: any;
  properties: ReservedProperty[];
  baseurl:string='http://localhost:8002/propimages/'

  constructor(private router: Router, private propertyService: PropertyService, private route: ActivatedRoute, private ownerService: OwnerService, private userService:UserService) {
    this.properties = [];
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      let search: string = <string>param.get('search');
      this.searchText = search;
      console.log(search, "from property");
    });

    this.email = localStorage.getItem('useremail');
    this.userService.getUserByEmail(this.email).subscribe(data => {
    this.userid = data.userid;
    console.log(this.userid);
    this.propertyService.propertyReservedByUser(this.userid).subscribe(data=>{
      this.properties = data;
      console.log(this.properties);
    })
    // this.propertyService.getPropertiesByOwner(this.ownerid).subscribe(data => {
    //   this.properties = data;
    //   console.log(this.properties);
    // });
    });
  }
  userLoggedin() {
    if (this.ownerService.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }

  update(update: number) {
    this.router.navigate(['propertyupdate', update])
  }

  delete(del: number) {
    this.propertyService.deleteProperty(del).subscribe(data => {
      console.log(data);
    });

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
