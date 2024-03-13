import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';
import { ReservedProperty } from '../model/ReservedProperty';
import { User } from '../model/User';
import { OwnerService } from '../service/owner.service';
import { PropertyService } from '../service/property.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reserveproperty',
  templateUrl: './reserveproperty.component.html',
  styleUrls: ['./reserveproperty.component.css']
})
export class ReservepropertyComponent implements OnInit {

  userid: number = 0;
  reservePropid: number = 0;
  property: Property;
  reservedProperty: ReservedProperty;
  user: User;
  email: any;
  sendmail: string;

  owneremail:string = 'pavanrajsh9@gmail.com';

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService,
    private propertyService: PropertyService, private ownerService: OwnerService) {

    this.user = { 'userid': 0, 'userfname': '' };
    this.sendmail = '';

    this.property = {
      'propid': 0, 'propname': '', 'proplocation': '', 'propsize': '', 'propfeatures': '', 'proptype': '', 'image1': '', 'image2': '', 'image3': '', 'price': 0, 'ratings': 0,
      'owner': { 'ownerid': 0 }
    };

    this.reservedProperty = {
      'reservedid': 0, 'username': '', 'proplocation': '', 'checkin': new Date, 'checkout': new Date, 'price': 0, 'user': { 'userid': 0 }, 'property': {
        'propid': 0, 'propname': '', 'proplocation': '', 'propsize': '', 'propfeatures': '', 'proptype': '', 'image1': '', 'image2': '', 'image3': '', 'price': 0, 'ratings': 0,
        'owner': { 'ownerid': 0 }
      }
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      let reserve: number = parseInt(<string>param.get('reserve'));
      this.reservePropid = reserve;
      console.log('propid', this.reservePropid)
    });

    this.email = localStorage.getItem('useremail');

    this.userService.getUserByEmail(this.email).subscribe(data => {
      this.userid = data.userid;
      this.user = data;
      console.log("user data ", data);
    })

    this.propertyService.getProperty(this.reservePropid).subscribe(data => {
      this.property = data;
      console.log("property data ", data)
    })
  }

  reserveProperty() {
    console.log(this.reservedProperty)
    console.log('booking details.....')

    this.sendmail = "Name: " + this.reservedProperty.username + "\n" +
      "Mobile: " + this.user.userphone + "\n" +
      "Property Name: " + this.property.propname + "\n" +
      "Location: " + this.property.proplocation + "\n" +
      "Checkin: " + this.reservedProperty.checkin + " " + "Checkout: " + this.reservedProperty.checkout + "\n"
      "Price: " + this.property.price;

      this.propertyService.sendmailToOwner(this.owneremail , this.sendmail).subscribe(data=>{return data});
    this.propertyService.reserveProperty(this.reservedProperty)
    .subscribe({
      next(){
        alert("Property reserved, mail has sent to owner")
      },
      error(){
        alert("Property can't be reserved right now, please try later")
      }
    });


  }

}