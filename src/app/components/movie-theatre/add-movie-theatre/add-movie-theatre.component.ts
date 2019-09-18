import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.data && this.data['movieTheatre']) {
      this.movieTheatre = this.data['movieTheatre'];
    } else {
      this.movieTheatre = new MovieTheatre();
    }
  }

  addMovieTheatre() {
    if (this.movieTheatre['id']) {
      this.movieService.updateMovieTheatre(this.movieTheatre).subscribe(result => {
        console.log(result);
        this.dialogRef.close();
      });
    } else {
      this.movieService.addMovieTheatre(this.movieTheatre).subscribe(result => {
        console.log(result);
        this.dialogRef.close();
      });
    }
  }
}
