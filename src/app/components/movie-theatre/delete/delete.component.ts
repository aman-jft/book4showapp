import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  movieTheatreId:number;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieService: MovieService) {
    this.dialogRef.disableClose = true;
    this.movieTheatreId = this.data['movieTheatreId'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  delete() {
    this.movieService.deleteMovieTheatre(this.movieTheatreId).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    }, err => {
      this.dialogRef.close();
    })
  }
}
