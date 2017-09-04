import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbsLoginComponent } from '../abs-login/abs-login.component';
import { SignupComponent } from '../signup/signup.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingComponent } from '../landing/landing.component';
import { AddProfileComponent } from '../add-profile/add-profile.component';


const routes: Routes = [
  { path: 'login', component: AbsLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addprofile', component: AddProfileComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
