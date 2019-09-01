import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieTheatreComponent } from './add-movie-theatre.component';

describe('AddMovieTheatreComponent', () => {
  let component: AddMovieTheatreComponent;
  let fixture: ComponentFixture<AddMovieTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
