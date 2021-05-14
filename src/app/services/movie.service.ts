import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../components/movies/data-table/data-table.model'
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class movieService {
  public url: string;

  constructor(private httpClient: HttpClient) {}
  getAllMovies() {
    return this.httpClient.get(`http://localhost:3700/api/movies`).
        pipe(
           map((data: Movie[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

}
