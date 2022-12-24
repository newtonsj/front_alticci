import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  constructor(private http: HttpClient) { }

  callAlticci(n: number) : Observable<any>{
    return this.http.get("http://localhost:8080/alticci/" + n);
  }
}
