import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { MovieTheatre } from 'src/app/models/movie-theatre.model';

@Component({
  selector: 'list-movie-theatre',
  templateUrl: './list-movie-theatre.component.html',
  styleUrls: ['./list-movie-theatre.component.css']
})
export class ListMovieTheatreComponent implements OnInit {
  movieTheatres: MovieTheatre[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.listMovieTheatres().subscribe(result => {
      this.movieTheatres = result.map( (theatre:MovieTheatre) => {
        let movieTheatre: MovieTheatre;
        movieTheatre = theatre;
        return movieTheatre;
      });
    });
  }

  addSchedule(movieTheatreId) {
    console.log("Add Schedule in theatre: " + movieTheatreId);
    
  }

  editTheatre(movieTheatreId) {

  }

  deleteTheatre(movieTheatreId) {

  }
}
