import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from '../model/Search';
import { OwnerService } from '../service/owner.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search: string = '';
  constructor(private userService:UserService, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  anyLogin(){
    if(('useremail' || 'owneremail') in localStorage){
      return true;
    }
    else{
      return false;
    }
  }

  userLoggedin() {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }
  ownerLoggedin() {
    if (this.ownerService.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }


  logout() {

    if (localStorage.getItem('useremail') !== null) {
      localStorage.removeItem('useremail');
    } else {
      localStorage.removeItem('owneremail');
    }

    this.router.navigate(['home']);

  }

  searchText(searchform: Search) {
    this.search = searchform.searchname;
    console.log(this.search)
    this.router.navigate(['userproperty', this.search]);
  }
}
