import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { MovieTheatre } from 'src/app/models/movie-theatre.model';

@Component({
  selector: 'add-movie-theatre',
  templateUrl: './add-movie-theatre.component.html',
  styleUrls: ['./add-movie-theatre.component.css']
})
export class AddMovieTheatreComponent implements OnInit {
  movieTheatre: any;
  constructor(private dialogRef: MatDialogRef<AddMovieTheatreComponent>,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
    this.movieTheatre = new MovieTheatre();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addMovieTheatre() {
    this.movieService.addMovieTheatre(this.movieTheatre).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    })
  }

}
