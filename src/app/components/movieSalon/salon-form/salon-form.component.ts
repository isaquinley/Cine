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
  public salonsAsp: Salon[]; // Services ASP NET CORE BACKEND
  public moviesAsp: Salon[];
  public movies: Movie[];
  public salonRecord: Salon;
  peli = '';
  hora = '';
  sala = '';
  salasDisponibles = [''];
  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  horarios = ['3:00 pm', '6:00 pm', '7:00 pm', '9:00 pm'];

  constructor(
    private salonService: salonService,
    private movieService: movieService,
    private modal: NgbModal,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.getSalonsList();
    this.getMovieList();
    this.getRecords();
    this.getMovieRecord();
  }

  getSalonsList() {
    this.salonService.getAllSalon().subscribe((data: any) => {
      this.salons = data;
    });
  }

  getMovieList() {
    this.movieService.getAllMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  createSalon() {
    this.salonRecord = {
      code: '1',
      movie: this.peli,
      schedule: this.hora,
      name: this.sala,
      description: '',
    };
    this.salonService.createSalon(this.salonRecord).subscribe((res) => {
      this.notifyService.showSuccess('Sala asignada', 'Proceso exitoso');
      this.modal.dismissAll();
    });
  }

  //Function for ASP NET CORE Backend
  getRecords() {
    this.salonService.getAllRecords().subscribe((data: any) => {
      this.salonsAsp = data;
    });
  }

  getMovieRecord() {
    this.movieService.getAllRecords().subscribe((data: any) => {
      this.moviesAsp = data;
    });
  }

  updateSala(id, salaname) {
    this.salonRecord = {
      code: id,
      movie: this.peli,
      schedule: this.hora,
      description: '',
      name: salaname ? salaname : 'Sala ' + id,
    };
    this.salonService.updateRecord(id, this.salonRecord).subscribe((res) => {
      this.notifyService.showSuccess('Sala asignada', 'Proceso exitoso');
      this.modal.dismissAll();
    });
  }
}
