import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { MovieSchedule } from 'src/app/models/movie-schedule.model';
import { MovieTheatre } from 'src/app/models/movie-theatre.model';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  movieSchedule: any;
  movieTheatre: MovieTheatre;
  movies: Movie[];
  constructor(private dialogRef: MatDialogRef<AddScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
    this.movieSchedule = new MovieSchedule();

    this.movieTheatre = this.data['movieTheatre'];
    this.movieSchedule.movieTheatre = this.movieTheatre.id;

    this.movieService.listMovies().subscribe(result => {
      this.movies = result.map(m => {
        let movie: Movie;
        movie = m;
        return movie;
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addSchedule() {
    this.movieService.addMovieSchedule(this.movieSchedule).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    })
  }
}
