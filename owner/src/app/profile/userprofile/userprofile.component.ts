import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user:User;
  email:any;
  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { 
    this.user = {'userid':0,'userfname':'','userlname':'','userphone':'','useremail':'','password':''};
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('useremail');
    this.userService.getUserByEmail(this.email).subscribe(data=>{
      console.log(data);
      this.user = data;
    })
  }

  update(){
    if(this.userService.updateUser(this.user)){
      alert('Profile Updated');
      this.router.navigate(['userprofile']);
    }
    else{
      alert("Profile can't be Updated now, please try later");
    }
  }

}
