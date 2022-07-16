import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//servicio de envio de solicitudes 
const AUTH_API = 'https://argentina-programa-spring.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //login
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  //registro
  register(nombre: string, apellido: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'registro',
      {
        nombre,
        apellido,
        email,
        password,
      },
      httpOptions
    );
  }
  //logout
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}
