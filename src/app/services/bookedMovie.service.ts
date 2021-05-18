import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BookedMovie } from '../models/bookedMovie.class';

@Injectable({
  providedIn: 'root'
})
export class bookedMovieService {
  constructor(private httpClient: HttpClient) {}
  getAllBookedMovie() {
    return this.httpClient.get(`http://localhost:3700/api/bookedMovies`).
        pipe(
           map((data: BookedMovie[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    createBookedMovie(newSalon: BookedMovie) {
      return this.httpClient.post(`http://localhost:3700/api/bookMovie`, newSalon).
          pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }


      // Service from ASP NET CORE BACKEND
    public getAllRecords() {
      return this.httpClient.get('https://localhost:44316/api/bookedMovie')
    }

    public createRecord(bookedMovie){
      console.log(bookedMovie)
      return this.httpClient.post('https://localhost:44316/api/bookedMovie', bookedMovie)
    //   pipe(
    //     map((data: BookedMovie) => {
    //       return data;
    //     }), catchError( error => {
    //       return throwError( 'Something went wrong!' );
    //     })
    //  )
    }

   public createArticle(book: BookedMovie): Observable<BookedMovie> {
      return this.httpClient.post<BookedMovie>('https://localhost:44316/api/bookedMovie', book);
 }

    public updateRecord(bookedMovieCode, bookedMovie){
      return this.httpClient.put('https://localhost:44316/api/bookedMovie/' +bookedMovieCode, bookedMovie)
    }

    public deleteRecord(bookedMovieCode){
      return this.httpClient.delete('https://localhost:44316/api/bookedMovie/' +bookedMovieCode)
    }

}
