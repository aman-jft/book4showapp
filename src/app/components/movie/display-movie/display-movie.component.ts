import { Component, OnInit, Input } from '@angular/core';
import { MovieSchedule } from 'src/app/models/movie-schedule.model';

@Component({
  selector: 'display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movieSchedule: MovieSchedule;

  constructor() { }

  ngOnInit() {
  }

}
