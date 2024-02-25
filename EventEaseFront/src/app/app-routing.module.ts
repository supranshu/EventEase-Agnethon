import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { AddcommitteeComponent } from './pages/addcommittee/addcommittee.component';
import { ViewcommitteeComponent } from './pages/viewcommittee/viewcommittee.component';
import { AddeventsComponent } from './pages/addevents/addevents.component';
import { Dashboard3Component } from './pages/dashboard3/dashboard3.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard1",
    component:Dashboard1Component,
    pathMatch:'full'
  },
  {
    path:"dashboard2",
    component:Dashboard2Component,
    pathMatch:'full'
  },
  {
    path:"addcommittee",
    component:AddcommitteeComponent,
    pathMatch:'full'
  },
  {
    path:"viewcommittee",
    component:ViewcommitteeComponent,
    pathMatch:'full'
  },
  {
    path:"addevents",
    component:AddeventsComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard3',
    component:Dashboard3Component,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
