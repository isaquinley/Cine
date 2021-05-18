import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../components/movies/data-table/data-table.model';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class movieService {
  public url: string;

  constructor(private httpClient: HttpClient) {}
  getAllMovies() {
    return this.httpClient.get(`http://localhost:3700/api/movies`).pipe(
      map((data: Movie[]) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  // Service from ASP NET CORE BACKEND
  public getAllRecords() {
    return this.httpClient.get('https://localhost:44316/api/movies');
  }

  public createRecord(movie) {
    return this.httpClient.post('https://localhost:44316/api/movies', movie);
  }

  public updateRecord(movieCode, movie) {
    return this.httpClient.put(
      'https://localhost:44316/api/movies' + movieCode,
      movie
    );
  }

  public deleteRecord(movieCode) {
    return this.httpClient.delete(
      'https://localhost:44316/api/movies' + movieCode
    );
  }
}
