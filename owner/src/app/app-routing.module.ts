import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginownerComponent } from './login/loginowner/loginowner.component';
import { LoginuserComponent } from './login/loginuser/loginuser.component';
import { OwnerprofileComponent } from './profile/ownerprofile/ownerprofile.component';
import { UserprofileComponent } from './profile/userprofile/userprofile.component';
import { PropertiesreservedComponent } from './propertiesreserved/propertiesreserved.component';
import { PropertyComponent } from './property/property.component';
import { PropertyregisterComponent } from './propertyregister/propertyregister.component';
import { PropertyupdateComponent } from './propertyupdate/propertyupdate.component';
import { RegisterownerComponent } from './register/registerowner/registerowner.component';
import { RegisteruserComponent } from './register/registeruser/registeruser.component';
import { ReservepropertyComponent } from './reserveproperty/reserveproperty.component';
import { UserpropertyComponent } from './userproperty/userproperty.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'loginuser', component:LoginuserComponent},
  {path:'loginowner', component:LoginownerComponent},
  {path:'registeruser', component:RegisteruserComponent},
  {path:'registerowner', component:RegisterownerComponent},
  {path:'header', component:HeaderComponent, canActivate:[AuthguardGuard]},
  {path:'userprofile', component:UserprofileComponent, canActivate:[AuthguardGuard]},
  {path:'ownerprofile', component:OwnerprofileComponent, canActivate:[AuthguardGuard]},
  {path:'userproperty', component:UserpropertyComponent, canActivate:[AuthguardGuard]},
  {path:'ownerproperty', component:PropertyComponent, canActivate:[AuthguardGuard]},
  {path:'userproperty/:search', component:UserpropertyComponent, canActivate:[AuthguardGuard]},
  {path:'propertyregister', component:PropertyregisterComponent, canActivate:[AuthguardGuard]},
  {path:'reserveproperty/:reserve', component:ReservepropertyComponent, canActivate:[AuthguardGuard]},
  {path:'propertiesreserved', component:PropertiesreservedComponent, canActivate:[AuthguardGuard]},
  {path:'propertyupdate/:update', component:PropertyupdateComponent, canActivate:[AuthguardGuard]},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
