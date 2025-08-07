import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  
import { ReactiveFormsModule } from '@angular/forms';
import { appConfig } from './app.config';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { AddPhysicalActivityComponent } from './components/add-physical-activity/add-physical-activity.component';
import { AddUserActivityComponent } from './components/add-user-activity/add-user-activity.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { UserActivityListBydateComponent } from './components/user-activity-list-bydate/user-activity-list-bydate.component';
import { UserActivityListByIdComponent } from './components/user-activity-list-byid/user-activity-list-byid.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { MSALInstanceFactory } from './msal.config';    
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UpdateUserComponent,
    BmiComponent,
    AddPhysicalActivityComponent,
    AddUserActivityComponent,
    AddMealComponent,
    UserActivityListBydateComponent,
    UserActivityListByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MsalModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Set toast position to top-right
      timeOut: 500, // Auto-close after 1 seconds
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
    })
    
  ],
  providers: [
    ...appConfig.providers,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
