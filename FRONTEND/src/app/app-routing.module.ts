import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MoviesComponent } from './movies/movies.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'addMovie',
    component:AddMovieComponent,
    canActivate:[authGuard]
  },
  {
    path:'bookTicket/:moviename',
    component:BookTicketComponent,
    canActivate:[authGuard]
  },
  {
    path:'',
    redirectTo:'movies',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
