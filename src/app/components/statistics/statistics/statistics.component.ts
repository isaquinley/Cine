import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookedMovie } from 'src/app/models/bookedMovie.class';
import { Salon } from 'src/app/models/salon.class';
import { bookedMovieService } from 'src/app/services/bookedMovie.service';
import { NotificationService } from 'src/app/services/notification.service';
import { salonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  public salons: Salon[];
  public bookedMovie: BookedMovie[];
  bookedMovies: BookedMovie;
  peli = '';
  hora = '';
  sala = '';
  numeroSala: Number;

  constructor(
    private salonService: salonService,
    private bookedService: bookedMovieService,
    private modal: NgbModal,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getSalonsList();
  }

  getSalonsList() {
    this.salonService.getAllSalon().subscribe((data: any) => {
      this.salons = data;
    });
  }

  createBookedMovie() {
    this.bookedMovies = {
      bookingCode: '1',
      movieName: 'moviename',
      movieCode: 'id',
      schedule: this.hora,
      salaName: 'Sala',
      salaCode: '1',
      ranking: 4
    };
    this.bookedService.createBookedMovie(this.bookedMovies).subscribe((res) => {
      this.notifyService.showSuccess('Pelicula Reservada', 'Proceso exitoso');
      this.modal.dismissAll();
    });
  }
}
