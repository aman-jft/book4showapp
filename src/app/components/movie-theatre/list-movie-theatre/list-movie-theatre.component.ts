import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { MovieTheatre } from 'src/app/models/movie-theatre.model';
import { AddScheduleComponent } from './../add-schedule/add-schedule.component';
import { MovieSchedule } from 'src/app/models/movie-schedule.model';
import { AuthService } from 'src/app/service/auth.service';
import { BookingComponent } from './../../booking/booking.component';

@Component({
  selector: 'list-movie-theatre',
  templateUrl: './list-movie-theatre.component.html',
  styleUrls: ['./list-movie-theatre.component.css']
})
export class ListMovieTheatreComponent implements OnInit {
  isLoggedIn: boolean;
  isAdmin: boolean;
  movieTheatres: MovieTheatre[];
  movieSchedules: MovieSchedule[]
  data: any;
  dataKeys: any;
  selectedDate: Date = new Date();

  constructor(private movieService: MovieService,
    private authService: AuthService,
    public dialog: MatDialog) {
    this.authService.isLoggedIn().subscribe(result => {
      this.isLoggedIn = result;
    });
    this.authService.isAdmin().subscribe(result => {
      this.isAdmin = result;
    });

    this.movieService.listMovieTheatres().subscribe(result => {
      this.movieTheatres = result.map((theatre: MovieTheatre) => {
        let movieTheatre: MovieTheatre;
        movieTheatre = theatre;
        return movieTheatre;
      });
    });
  }

  ngOnInit() {
    this.listSchedules();
  }
  increment() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.listSchedules();
  }

  decrement() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.listSchedules();
  }

  listSchedules() {
    this.movieService.listMovieSchedules(this.selectedDate).subscribe(result => {
      this.movieSchedules = result.map((schedule: MovieSchedule) => {
        let movieSchedule: MovieSchedule;
        movieSchedule = schedule;
        return movieSchedule;
      });

      console.debug("this.movieSchedules : " + this.movieSchedules);

      let temp = [];
      for (let theatre of this.movieTheatres) {
        let list = this.movieSchedules.filter(item => {
          console.debug(item['movieTheatre'] + ' - ' + theatre.id);
          return item['movieTheatre'] == theatre.id;
        });

        temp.push([theatre, list]);
      }

      let temp3 = temp.sort(function (x, y) {
        return x[1].length - y[1].length;
      }).reverse();

      let temp4 = new Map();
      temp3.forEach((item) => {
        temp4.set(item[0], item[1]);
      });
      this.data = temp4;
      this.dataKeys = this.data.keys();
      console.log("this.data 2 : " + JSON.stringify(this.data));
    });
  }


  addSchedule(movieTheatreId) {
    console.log("Add Schedule in theatre: " + movieTheatreId);
    let theatre = this.movieTheatres.find(t => t.id == movieTheatreId);
    const dialogRef = this.dialog.open(AddScheduleComponent, {
      width: '450px',
      //height: '700px',
      data: { movieTheatre: theatre }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  editTheatre(movieTheatreId) {

  }

  deleteTheatre(movieTheatreId) {

  }

  addBooking(movieScheduleId) {
    const dialogRef = this.dialog.open(BookingComponent, {
      width: '450px',
      //height: '700px',
      data: { movieScheduleId: movieScheduleId, bookingDate: this.selectedDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
