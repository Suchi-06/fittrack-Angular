import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) {}

  login(userEmail: string, userPassword: string): Observable<any> {
    const loginData = { userEmail, userPassword };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }
  
  register(registerData: {
    userName: string;
    userAge: number;
    genderRefId: number;
    userHeight: number;
    userWeight: number;
    userEmail: string;
    userPassword: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registeruser`, registerData);
  }

updateUser(userData:{
  id: number;
  userName: string;
  userAge: number;
  genderRefId: number;
  userHeight: number;
  userWeight: number;
  userEmail: string;
  userPassword: string;
}): Observable<any> {
  return this.http.post(`${this.apiUrl}/updateuser`, userData);
}


getUserById(userId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/findbyuserid?userId=${userId}`);
}

getBMIByUserId(userId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/bmi?userId=${userId}`);
}

addActivity(activity: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/addactivitytypetolist`, activity);
}

getAllActivitiesList(): Observable<any> {
  return this.http.get(`${this.apiUrl}/getallActivitiesList`);
}


addUserActivity(activityData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/adduseractivity`, activityData);
}

addMeal(mealData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/meals/addmeal`, mealData);
}

getUserActivitiesByDate(date: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/useractivitylistbydate?date=${date}`);
}

getUserActivitiesById(userId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/useractivitylistbyuserid?userId=${userId}`);
}

}
