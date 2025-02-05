import { Injectable } from '@angular/core';
import { Card } from './card';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiURL = 'http://127.0.0.1:8000/api';
    
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
  
    constructor(private httpClient: HttpClient) {}

    // All cards
    getCards(page: number = 1, perPage: number = 10): Observable<any> {
      return this.httpClient.get(`${this.apiURL}/cards?page=${page}&per_page=${perPage}`, { headers: this.headers }).pipe(
        catchError(this.errorHandler)
      );
    }
  
    // create
    create(card:Card):Observable<any>{
      return this.httpClient.post(this.apiURL+'/cards/',JSON.stringify(card), { headers: this.headers })
      .pipe(catchError(this.errorHandler))
    }
  
    // find Card
    find(id: number): Observable<any> {
      return this.httpClient.get(this.apiURL+'/cards/'+id, { headers: this.headers })
        .pipe(catchError(this.errorHandler));
    }
  
    //update
    update(id:number, card:Card ):Observable<any>{
      return this.httpClient.put(this.apiURL+'/cards/'+id, JSON.stringify(card), { headers: this.headers })
      .pipe(catchError(this.errorHandler))
    }

    updateStatus(card: any): Observable<any> {
      return this.httpClient.put(`${this.apiURL}/cards/${card.id}`, card,  { headers: this.headers });
    }
    
  
    //delete
    delete(id:number){
      return this.httpClient.delete(this.apiURL+'/cards/'+id, { headers: this.headers })
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
