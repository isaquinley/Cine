import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { DataTableComponent } from './components/movies/data-table/data-table.component';
import { SalonFormComponent } from './components/movieSalon/salon-form/salon-form.component';


const routes: Routes = [
    {path: '' , component: LoginFormComponent}, //carga este componente al iniciar la aplicacion
  //{path: 'home' , component: HomeComponent},
    {path: 'movies', component: DataTableComponent},
    {path: 'salon', component: SalonFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
