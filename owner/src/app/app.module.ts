import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { PropertyregisterComponent } from './propertyregister/propertyregister.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { PropertyupdateComponent } from './propertyupdate/propertyupdate.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginuserComponent } from './login/loginuser/loginuser.component';
import { RegisterownerComponent } from './register/registerowner/registerowner.component';
import { LoginownerComponent } from './login/loginowner/loginowner.component';
import { RegisteruserComponent } from './register/registeruser/registeruser.component';
import { UserprofileComponent } from './profile/userprofile/userprofile.component';
import { OwnerprofileComponent } from './profile/ownerprofile/ownerprofile.component';
import { UserpropertyComponent } from './userproperty/userproperty.component';
import { ReservepropertyComponent } from './reserveproperty/reserveproperty.component';
import { PropertiesreservedComponent } from './propertiesreserved/propertiesreserved.component';
import { AuthguardService } from './service/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyComponent,
    HomeComponent,
    PropertyregisterComponent,
    FooterComponent,
    PropertyupdateComponent,
    LoginuserComponent,
    LoginownerComponent,
    RegisteruserComponent,
    RegisterownerComponent,
    UserprofileComponent,
    OwnerprofileComponent,
    UserpropertyComponent,
    ReservepropertyComponent,
    PropertiesreservedComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
