import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salon } from '../models/salon.class'
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class salonService {
  constructor(private httpClient: HttpClient) {}
  getAllSalon() {
    return this.httpClient.get(`http://localhost:3700/api/salons`).
        pipe(
           map((data: Salon[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    createSalon(newSalon: Salon) {
      console.log(newSalon)
      return this.httpClient.post(`http://localhost:3700/api/salon`, newSalon).
          pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

}
