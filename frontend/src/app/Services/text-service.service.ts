import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextServiceService {

  apiURL: string = 'http://127.0.0.1:8000/api/';

  constructor(public http: HttpClient) { }

  getText(): Observable<any> {
    return this.http.get(this.apiURL + 'getText');
  }
}
