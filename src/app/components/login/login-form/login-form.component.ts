import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { DataTableComponent } from '../../movies/data-table/data-table.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  email = '';
  password = '';

  constructor(private userService: userService, public router: Router) {}

  ngOnInit(): void {}

  login() {
    this.userService
      .getUser(this.email, this.password)
      .subscribe((data: any) => {
        if (data.auth) {
          const path = data.isAdmin ? '/salon' : '/movies';
          this.router.navigateByUrl(path);
        }
      });
  }
}
