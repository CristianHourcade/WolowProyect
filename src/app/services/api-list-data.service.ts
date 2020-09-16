import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListData } from '../list-data';

@Injectable({
  providedIn: 'root'
})
export class APIListDataService {

  private API_URL = "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs";

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<ListData>(this.API_URL)
  }
}
