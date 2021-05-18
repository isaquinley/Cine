import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableComponent } from './components/movies/data-table/data-table.component';
import { InteractionService } from './services/interaction.service';
import { userService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cinema';
  show: boolean = false;
  shownavbar: boolean = false;

  constructor(
    private interactionService: InteractionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.interactionService.loginMessageSource$.subscribe((message) => {
      if (message) {
        this.show = true;
        this.shownavbar = true;
      } else {
        this.show = false;
        this.shownavbar = true;
      }
    });
  }

  logout() {
    this.shownavbar = false;
    this.show = false;
    this.router.navigateByUrl('');
  }
}
