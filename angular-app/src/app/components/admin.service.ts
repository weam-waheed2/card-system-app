import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Data } from '../auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiURL = 'http://127.0.0.1:8000/api';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  constructor(private httpClient: HttpClient) {}

  // All logs
  getLogs(page: number = 1, perPage: number = 10): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/admin/logs?page=${page}&per_page=${perPage}`, { headers: this.headers });
  }


  // All users
  getUsers():Observable<any>{
    return this.httpClient.get(this.apiURL+'/admin/users', { headers: this.headers }).pipe(catchError(this.errorHandler))
  }


  //create
  create(user: any): Observable<any> {
    return this.httpClient.post( `${this.apiURL}/admin/users/`, JSON.stringify(user), { headers: this.headers }  ).pipe( catchError(this.errorHandler) );
  }

  // find data
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL+'/admin/users/'+id, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  //update
  update(id:number, user:Data):Observable<any>{
    return this.httpClient.put(this.apiURL+'/admin/users/'+id, JSON.stringify(user),{ headers: this.headers } )
    .pipe(catchError(this.errorHandler))
  }

  //delete
  delete(id:number){
    return this.httpClient.delete(this.apiURL+'/admin/users/'+id, { headers: this.headers })
    .pipe(catchError(this.errorHandler))
    
  }

  errorHandler(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    }
    else{
      errorMessage = `Error code:${error.status}\nMessage:${error.message}`;
    }
    return throwError(errorMessage);
  }
}
