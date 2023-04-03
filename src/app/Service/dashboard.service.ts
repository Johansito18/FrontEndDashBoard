
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environments';
import {Observable} from 'rxjs';

import { Area } from './../Interface/area';
import { User } from './../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private endPoint:string = environment.endPoint;

  private apiUrlUsers:string = this.endPoint + "users/";

  private apiUrlAreas:string = this.endPoint + "areas/";

  constructor(private http:HttpClient) { }

  //USERS
  addUser(modelo:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrlUsers}saveUser`, modelo);
  }
  
  //FILTROS
  findAllByEmployeeRol():Observable<User>{
    return this.http.get<User>(`${this.apiUrlUsers}findAllByEmployeeRol`);
  }

  userAmountAllEmployees():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfEmployees`);
  }

  userAmountAllActiveEmployees():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfActiveEmployees`);
  }

  userAmountAllInactiveEmployees():Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfInactiveEmployees`);
  }

  findAmountOfEmployeesByName(name:string):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfEmployeesByName/${name}`);
  }

  findAmountOfUsersAndAreasByState(state:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfUsersAndAreasByState/${state}`);
  }

  findAmountOfUsersBySalary(salary:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfUsersBySalary/${salary}`);
  }

  findAmountOfUsersByAge(age:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfUsersByAge/${age}`);
  }

  findAmountOfUsersByNumberDocument(numberDocument:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrlUsers}findAmountOfUsersByNumberDocument/${numberDocument}`);
  }

  //AREAS
  addArea(modelo:Area):Observable<Area>{
    return this.http.post<Area>(`${this.apiUrlAreas}saveArea`, modelo);
  }

  areaAmountAllAreas():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}findAmountOfAreas`);
  }

  areaAmountAllActiveAreas():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}findAmountOfActiveAreas`);
  }

  areaAmountAllInactiveAreas():Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}findAmountOfInactiveAreas`);
  }

  findAmountOfAreasByName(name:string):Observable<number>{
    return this.http.get<number>(`${this.apiUrlAreas}findAmountOfAreasByName/${name}`);
  }




}
