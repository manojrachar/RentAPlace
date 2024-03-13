import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { Messages } from 'src/app/model/Messages';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-loginowner',
  templateUrl: './loginowner.component.html',
  styleUrls: ['./loginowner.component.css']
})
export class LoginownerComponent implements OnInit {

  
  isError: boolean = false;
  errMessage: string = '';
  islogin: Boolean = false;
  

  constructor(private router: Router, private ownerService: OwnerService) {

  }

  ngOnInit(): void {
   
  }

  login(user: Login) {
    console.log(user);
    let that = this;
    this.ownerService.validateLogin(user)
      .subscribe(
        {
          next(data: Messages) {
            console.log("Am here");
            console.log(user.email);
            localStorage.setItem('owneremail', user.email);
            that.router.navigate(['ownerproperty']);
          },
          error(data) {
            console.log(data.error);
            that.isError = true;
            that.errMessage = data.error.description;
            console.log(that.errMessage);
          }
        });
  }
  logout() {
    localStorage.removeItem('email');
  }

}
