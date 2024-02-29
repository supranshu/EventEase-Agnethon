import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { AddcommitteeComponent } from './pages/addcommittee/addcommittee.component';
import { ViewcommitteeComponent } from './pages/viewcommittee/viewcommittee.component';
import { AddeventsComponent } from './pages/addevents/addevents.component';
import { Dashboard3Component } from './pages/dashboard3/dashboard3.component';
import { DevloginComponent } from './pages/devlogin/devlogin.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Dashboard1Component,
    Dashboard2Component,
    AddcommitteeComponent,
    ViewcommitteeComponent,
    AddeventsComponent,
    Dashboard3Component,
    DevloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatSnackBarModule, MatCardModule,MatToolbarModule, MatListModule,MatGridListModule,FormsModule,HttpClientModule, CommonModule, BrowserAnimationsModule, MatSelectModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule,NgxMaterialTimepickerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
