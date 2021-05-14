import { Component, OnInit } from '@angular/core';
import { Movie } from './data-table.model';
import { movieService } from '../../../services/movie.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public movies: Movie[];
  public errorMessage: string;
  public term: string[];

  constructor(public http: HttpClient, private movieService: movieService){}

  ngOnInit(){
    this.getMovieList();
  }

  getMovieList() {
    this.movieService
    .getAllMovies()
    .subscribe((data:any) => {
      console.log('info',data);
      this.movies = data;
      console.log('movies', this.movies)
    });
  }
}




