import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/model/Owner';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-ownerprofile',
  templateUrl: './ownerprofile.component.html',
  styleUrls: ['./ownerprofile.component.css']
})
export class OwnerprofileComponent implements OnInit {

  owner:Owner;
  email:any;
  constructor(private ownerService:OwnerService, private router:Router, private route:ActivatedRoute) { 
    this.owner = {'ownerid':0,'ownerfname':'','ownerlname':'','ownerlocation':'','ownerphone':'','owneremail':'','password':''};
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('owneremail');
    this.ownerService.getOwnerByEmail(this.email).subscribe(data=>{
      console.log(data);
      this.owner = data;
    })
  }

  update(){
    if(this.ownerService.updateOwner(this.owner)){
      alert('Profile Updated');
      this.router.navigate(['ownerprofile']);
    }
    else{
      alert("Profile can't be Updated now, please try later");
    }
  }

}
