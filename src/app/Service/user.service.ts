import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endPoint: string = environment.endPoint;
  private apiUrl: string = this.endPoint + "users/";

  constructor(private http: HttpClient) { }

  getList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}findAllByEmployeeRol`);
  }

  add(modelo:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}saveUser`,modelo);
  }

  update(idUser:number, modelo:User):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}updateUser/${idUser}`,modelo);
  }

  /* delete(idProducto:number):Observable<IProducto>{
    return this.http.delete<IProducto>(`${this.apiUrl}eliminarProducto/${idProducto}`);
  } */
}
