import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/model/Owner';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-registerowner',
  templateUrl: './registerowner.component.html',
  styleUrls: ['./registerowner.component.css']
})
export class RegisterownerComponent implements OnInit {

  constructor(private router:Router, private ownerService:OwnerService) { }

  ngOnInit(): void {
  }
  register(register:Owner):void{
    this.ownerService.registerOwner(register)
    .subscribe(data=>{
      alert('Successfully Registered, Please Login')
    });
    this.router.navigate(['loginowner']);
  }
}
