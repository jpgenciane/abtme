import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPipe } from './pages/login.pipe';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { PrioritiesComponent } from './components/priorities/priorities.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MyexpenseComponent } from './components/myexpense/myexpense.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPipe,
    LoginComponent,
    SignupComponent,
    SignupFormComponent,
    DashboardComponent,
    NavComponent,
    MyprofileComponent,
    PrioritiesComponent,
    DialogComponent,
    MyexpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
