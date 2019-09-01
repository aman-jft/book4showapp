import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: any;
  constructor(public dialogRef: MatDialogRef<AddMovieComponent>,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
    this.movie = new Movie();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    })
  }


}
