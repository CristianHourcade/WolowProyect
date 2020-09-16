import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  private API_URL = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login";

  constructor(private httpClient: HttpClient) { }

  loginUser(form : Usuario) {
    const Headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<Usuario>(this.API_URL, form, Headers);
  }

}
