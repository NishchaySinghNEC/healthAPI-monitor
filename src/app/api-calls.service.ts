import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogInterface } from './log-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor( private http: HttpClient) { }

  public apiCheckCall(url:string){
    return this.http.get<any>(url,
      {observe:'response'})
  }

  public callLog(url:string): Observable<LogInterface[]>{
    return this.http.get<LogInterface[]>(url)
  }

  public callLogDetails(url:string,body:any): Observable<any>{
    return this.http.get<any>(url,body)
  }
}
