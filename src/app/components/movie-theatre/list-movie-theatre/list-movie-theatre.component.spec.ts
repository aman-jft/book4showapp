import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieTheatreComponent } from './list-movie-theatre.component';

describe('ListMovieTheatreComponent', () => {
  let component: ListMovieTheatreComponent;
  let fixture: ComponentFixture<ListMovieTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
