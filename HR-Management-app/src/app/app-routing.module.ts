import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasePageComponent } from './base-page/base-page.component';
import { LoginComponent } from './login/login.component';
import { ManagementSpaceComponent } from './management-space/management-space.component';


const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'base', component: BasePageComponent },
  { path: 'login/:type', component: LoginComponent },
  { path: 'management-space', component: ManagementSpaceComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
