import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogInterface } from './log-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor( private http: HttpClient) { }

  public apiCheckCall(url: string){
    return this.http.get(url)
  }

  public callLog(url:string): Observable<LogInterface[]>{
    return this.http.get<LogInterface[]>(url)
  }

  public postLog(body:any){
    return this.http.post(`http://localhost:9000/createBaseUrl`, body)
  }

  public updateLog(body:any){
    return this.http.put(`http://localhost:9000/updateBaseUrl`, body)
  }

  public getDataList(component: string){
    return this.http.get(`http://localhost:9000/getBaseUrl?type=${component}`)
  }

  public callLogDetails(url:string,body:any): Observable<any>{
    return this.http.get<any>(url,body)
  }

  public delete(id: string){
    return this.http.delete(`http://localhost:9000/deleteBaseUrl/${id}`)
  }
}
