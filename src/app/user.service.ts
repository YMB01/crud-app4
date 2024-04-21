import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserData } from './in-memeory-data.service';


@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    apiurl = 'api/users';                 // Our created Data can be accessed here at api/users
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
      headers: this.headers
    };
  
  constructor(private http: HttpClient) { }                     
  //Injecting HTTP service to communicate with the data
  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
     
    );
  }
   
 
   

}