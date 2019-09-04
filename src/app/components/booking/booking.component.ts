import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking:Booking;
  constructor(public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
    this.booking = new Booking();
    this.booking.movieScheduleId = this.data['movieScheduleId'];
    let date = this.movieService.parseDate(this.data['bookingDate']);
    this.booking.bookingDate =  date;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addBooking() {
    this.movieService.addBooking(this.booking).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    })
  }
}
