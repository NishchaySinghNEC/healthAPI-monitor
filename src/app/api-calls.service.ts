import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ENDPOINTS} from './url-constants'

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor( private http: HttpClient,private jsonp:HttpClientJsonpModule) { }

  public apiCheckCall(url:string){
    return this.http.get<any>(url,
      {observe:'response'})
  }
}
