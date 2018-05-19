import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { ManagementSpaceComponent } from './management-space/management-space.component';
import { AuthService } from './auth.service';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { AuthInterceptorService } from './auth-interceptor.service';


const routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: ManagementSpaceComponent,
    canActivate: [
        CanActivateViaAuthGuard
    ]
},
{ path: '', component: BasePageComponent },
{ path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    LoginComponent,
    ManagementSpaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
