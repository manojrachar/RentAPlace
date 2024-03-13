import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';
import { OwnerService } from '../service/owner.service';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  ownerid: number = 0;
  searchText: string = '';
  email: any;
  properties: Property[];
  baseurl:string='http://localhost:8002/propimages/'

  constructor(private router: Router, private propertyService: PropertyService, private route: ActivatedRoute, private ownerService: OwnerService) {
    this.properties = [];
  }

  ngOnInit(): void {

    // this.route.paramMap.subscribe(param => {
    //   let search: string = <string>param.get('search');
    //   this.searchText = search;
    //   console.log(search, "from owner property");
    // });

    this.email = localStorage.getItem('owneremail');
    this.ownerService.getOwnerByEmail(this.email).subscribe(data => {
    this.ownerid = data.ownerid;
    console.log(this.ownerid);
    this.propertyService.getPropertiesByOwner(this.ownerid).subscribe(data => {
      this.properties = data;
      console.log(this.properties);
    });
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
