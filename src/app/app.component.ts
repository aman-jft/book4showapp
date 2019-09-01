import { Component } from '@angular/core';
import { AddMovieTheatreComponent } from './components/movie-theatre/add-movie-theatre/add-movie-theatre.component';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from './components/movie/add-movie/add-movie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
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
}
