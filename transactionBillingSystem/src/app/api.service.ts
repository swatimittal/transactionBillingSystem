import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) { }

  public getMerchantDetails(){
    return this.httpClient.get(`${this.apiURL}`);
  }

 

}
