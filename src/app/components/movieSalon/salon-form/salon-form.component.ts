import { Component, OnInit } from '@angular/core';
import { Salon } from 'src/app/models/salon.class';
import { movieService } from 'src/app/services/movie.service';
import { salonService } from 'src/app/services/salon.service';
import { Movie } from '../../movies/data-table/data-table.model';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-salon-form',
  templateUrl: './salon-form.component.html',
  styleUrls: ['./salon-form.component.css'],
})
export class SalonFormComponent implements OnInit {
  public salons: Salon[];
  public movies: Movie[];
  public salonRecord: Salon;
  peli = '';
  hora = '';
  sala = '';
  numeroSala: Number;
  salasDisponibles = [''];
  horarios = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  dias = ['3:00 pm', '6:00 pm', '7:00 pm', '9:00 pm'];

  constructor(
    private salonService: salonService,
    private movieService: movieService,
    private modal: NgbModal,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.getSalonsList();
    this.getMovieList();
  }

  getSalonsList() {
    this.salonService.getAllSalon().subscribe((data: any) => {
      this.salons = data;
      console.log('salas', this.salons);
    });
  }

  getMovieList() {
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.movies = data;
      console.log('movies', this.movies);
    });
  }

  createSalon() {
    this.salonRecord = {
      number: this.numeroSala,
      movie: this.peli,
      schedule: this.hora,
      name: this.sala,
    };
    this.salonService.createSalon(this.salonRecord).subscribe((res) => {
      this.notifyService.showSuccess('Sala asignada', 'Proceso exitoso');
      this.modal.dismissAll();
    });
  }
}
