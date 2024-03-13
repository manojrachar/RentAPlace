import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { Messages } from 'src/app/model/Messages';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  
  isError: boolean = false;
  errMessage: string = '';
  islogin: Boolean = false;
  

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
   
  }

  login(user: Login) {
    console.log(user);
    let that = this;
    this.userService.validateLogin(user)
      .subscribe(
        {
          next(data: Messages) {
            console.log("Am here");
            console.log(user.email);
            localStorage.setItem('useremail', user.email);
            that.router.navigate(['userproperty']);
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
