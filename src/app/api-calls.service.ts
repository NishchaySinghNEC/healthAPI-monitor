import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ENDPOINTS} from './url-constants'
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor( private http: HttpClient) { }

  public providerPortalcall(){
    return this.http.get<any>(ENDPOINTS.Provider_Portal.url, {observe: 'response'})
  }
}