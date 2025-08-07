import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { AddPhysicalActivityComponent } from './components/add-physical-activity/add-physical-activity.component';
import { AddUserActivityComponent } from './components/add-user-activity/add-user-activity.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { UserActivityListBydateComponent } from './components/user-activity-list-bydate/user-activity-list-bydate.component';
import { UserActivityListByIdComponent } from './components/user-activity-list-byid/user-activity-list-byid.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'add-physical-activity', component: AddPhysicalActivityComponent },
  { path: 'add-user-activity', component: AddUserActivityComponent },
  { path: 'add-meal', component: AddMealComponent },
  { path: 'user-activity-list-bydate' , component : UserActivityListBydateComponent},
  { path: 'user-activity-list-byid' , component : UserActivityListByIdComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
