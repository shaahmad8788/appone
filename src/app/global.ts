import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

getRecord(data: string): Observable<any[]> {
    const url = `${this.baseUrl}/${data}`;
    return this.http.get<any[]>(url);
  }

  getSingleRecord(data: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${data}/${id}`;
    return this.http.get<any>(url);
  }

  deleteRecord(data: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${data}/${id}`;
    return this.http.delete<any>(url);
  }

  addRecord(data: string, rec: any): Observable<any> {
    const url = `${this.baseUrl}/${data}`;
    return this.http.post<any>(url, rec);
  }

  updateRecord(data: string, recrd: any, id: number): Observable<any> {
    const url = `${this.baseUrl}/${data}/${id}`;
    return this.http.put<any>(url, recrd);
  }
}
