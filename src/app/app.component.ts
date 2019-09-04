import { Component } from '@angular/core';
import { AddMovieTheatreComponent } from './components/movie-theatre/add-movie-theatre/add-movie-theatre.component';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from './components/movie/add-movie/add-movie.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from 'src/app/service/auth.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean;
  isAdmin:boolean;
  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private movieService:MovieService) {
      this.authService.isLoggedIn().subscribe(result=>{
        this.isLoggedIn = result;
      });
       this.authService.isAdmin().subscribe(result => {
        this.isAdmin =result;
      });
      this.logout();
    }
  addMovieTheatre(): void {
    const dialogRef = this.dialog.open(AddMovieTheatreComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  addMovie(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  login():void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  logout(){
    this.authService.logout();
    this.movieService.logout().subscribe(result =>{
      console.log(result);
    });
  }
}
