import { Component, OnInit } from '@angular/core';
import { Movie } from './data-table.model';
import { movieService } from '../../../services/movie.service';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification.service';
import { BookedMovie } from 'src/app/models/bookedMovie.class';
import { bookedMovieService } from 'src/app/services/bookedMovie.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  public movies: Movie[];
  public moviesAsp: Movie[]; // Service from ASP NET CORE BACKEND
  public errorMessage: string;
  public term: string[];
  public bookingRecord: BookedMovie; // ASP NET CORE
  bookingMovies: BookedMovie[];
  peli = '';
  movieCode = '';
  hora = '';
  sala = '';
  salaCode = '';
  numeroSala: Number;

  constructor(
    public http: HttpClient,
    private movieService: movieService,
    private modal: NgbModal,
    private notifyService: NotificationService,
    private bookedService: bookedMovieService
  ) {}

  ngOnInit() {
    this.getMovieList();
    this.getAllRecords();
  }

  getMovieList() {
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  // Service from ASP NET CORE BACKEND
  getAllRecords() {
    this.movieService.getAllRecords().subscribe((data: any) => {
      this.moviesAsp = data;
      console.log('pelis ASP', data);
    });
  }

  openModal(content, size) {
    this.modal.open(content, { size: size });
  }

  // selectedBookedMovie() {
  //   this.bookingRecord = {
  //     bookingCode: 'id',
  //     movieName: this.peli,
  //     movieCode:this.movieCode,
  //     schedule: this.hora,
  //     salaName: salaname ? salaname : 'Sala ' + id,
  //     salaCode: '',
  //     ranking: 4
  //   };
  //   this.bookedService.createBookedMovie(this.bookedMovies).subscribe((res) => {
  //     this.notifyService.showSuccess('Pelicula Reservada', 'Proceso exitoso');
  //     this.modal.dismissAll();
  //   });
  // }

  // functions ASP NET CORE
  creteBooking(id, moviename) {
    console.log(id, moviename);
    console.log();
    this.bookingRecord = {
      bookingCode: '2',
      movieName: moviename,
      movieCode: id,
      schedule: 'Sabado',
      salaName: 'Sala 2',
      salaCode: '2',
      ranking: 5,
    };
    console.log(this.bookingRecord);
    this.bookedService.createArticle(this.bookingRecord).subscribe((res) => {
      console.log(res)
      // this.notifyService.showSuccess('Pelicula Reservada', 'Proceso exitoso');
      // this.modal.dismissAll();
    });
  }
}
