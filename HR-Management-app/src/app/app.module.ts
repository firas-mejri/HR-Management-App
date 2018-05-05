import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './login.service';
import { ManagementSpaceComponent } from './management-space/management-space.component';


@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    LoginComponent,
    ManagementSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
