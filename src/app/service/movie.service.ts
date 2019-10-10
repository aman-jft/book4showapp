import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';



import { MovieTheatre } from 'src/app/models/movie-theatre.model';
import { Movie } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MovieSchedule } from '../models/movie-schedule.model';
import { User } from 'src/app/models/user.model';
import { Booking } from 'src/app/models/booking.model';

@Injectable()
export class MovieService {

  private API_URL: string = 'https://javatechnofans.herokuapp.com/book4show/';
  constructor(private http: HttpClient) { }

  public addMovieTheatre(movieTheatre: MovieTheatre): Observable<any> {
    return this.http.post(this.API_URL + 'movietheatre/add', movieTheatre, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public updateMovieTheatre(movieTheatre: MovieTheatre): Observable<any> {
    return this.http.post(this.API_URL + 'movietheatre/update', movieTheatre, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public deleteMovieTheatre(id: number): Observable<any> {
    return this.http.get(this.API_URL + 'movietheatre/delete/'+id, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public listMovieTheatres(): Observable<any> {
    return this.http.get(this.API_URL + 'movietheatre/list').pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public addMovie(movie: Movie) {
    return this.http.post(this.API_URL + 'movie/add', movie, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public listMovies(): Observable<any> {
    return this.http.get(this.API_URL + 'movie/list').pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public addMovieSchedule(movieSchedule: MovieSchedule) {
    return this.http.post(this.API_URL + 'movieSchedule/add', movieSchedule, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public listMovieSchedules(date): Observable<any> {
    var dd = date.getDate();

    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    date = yyyy + '-' + mm + '-' + dd;
    return this.http.get(this.API_URL + 'movieSchedule/findByDate?date=' + date).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public parseDate(date): any {
    var dd = date.getDate();

    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }

  public login(user: User) {
    const body = new FormData();
    body.append('username', user.username)
    body.append('password', user.password);

    console.log(body);
    let temp = `username=${user.username}&password=${user.password}`;
    return this.http.post(this.API_URL + 'login', temp,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded'),
        withCredentials: true,
      }).pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  public logout(): Observable<any> {
    return this.http.get(this.API_URL + 'logout').pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  public addBooking(booking: Booking) {
    return this.http.post(this.API_URL + 'booking/add', booking, { 'withCredentials': true }).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    console.log(error.error);
    console.log(error.error.message);
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    } else if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //debugger;
    window.alert(errorMessage);
    return Observable.create(errorMessage);
  }

}
