import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieTheatre } from 'src/app/models/movie-theatre.model';
import { Movie } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable()
export class MovieService {
  private API_URL: string = 'http://localhost:8080/book4show/';
  constructor(private http: HttpClient) { }

  public addMovieTheatre(movieTheatre: MovieTheatre): Observable<any> {
    return this.http.post(this.API_URL + 'movietheatre/add', movieTheatre) .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public listMovieTheatres(): Observable<any> {
    return this.http.get(this.API_URL + 'movietheatre/list') .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public addMovie(movie: Movie) {
    return this.http.post(this.API_URL + 'movie/add', movie) .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public listMovies(): Observable<any> {
    return this.http.get(this.API_URL + 'movie/list') .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return Observable.create(errorMessage);
 }

}
