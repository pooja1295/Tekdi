import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../User';

@Injectable({
  providedIn: 'root'
})
export class ObservableandObserverserviceService {

  url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);


  }
}
