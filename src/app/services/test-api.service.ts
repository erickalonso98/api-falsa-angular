import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  public url:string;

  constructor(private _http:HttpClient) { 
    this.url = 'https://reqres.in/';
  }

  public getUser():Observable<any>{
    return this._http.get(this.url+'api/users?page=2');
  }

}
