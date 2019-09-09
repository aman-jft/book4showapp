import { Component, OnInit, NgZone, ViewChild, OnDestroy } from '@angular/core';
import { MovieSchedule } from 'src/app/models/movie-schedule.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit, OnDestroy {
  movieSchedules: MovieSchedule[] = [];
  displayedColumns: string[] = ['id', 'movieTheatreName', 'movieName', 'timeSlot', 'from', 'to'];
  dataSource: any;
  eventSource: EventSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private zone: NgZone) {
    this.dataSource = new MatTableDataSource();
    this.eventSource = new EventSource("http://localhost:8080/book4show/movieSchedule/listStream");
    this.eventSource.onmessage = event => {
      this.zone.run(() => {
        console.log(event.data);
        this.movieSchedules.push(JSON.parse(event.data));
        this.dataSource.data = this.movieSchedules;
        // debugger;
      })
    };
    this.eventSource.onerror = error => {
      this.eventSource.close();
    };
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.eventSource.close();
  }
}
