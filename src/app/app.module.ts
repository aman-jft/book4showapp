import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import { ListMovieTheatreComponent } from './components/movie-theatre/list-movie-theatre/list-movie-theatre.component';
import { AddMovieTheatreComponent } from './components/movie-theatre/add-movie-theatre/add-movie-theatre.component';
import { AddMovieComponent } from './components/movie/add-movie/add-movie.component';
import { DisplayMovieComponent } from './components/movie/display-movie/display-movie.component';

import {MovieService} from './service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieTheatreComponent,
    AddMovieTheatreComponent,
    AddMovieComponent,
    DisplayMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddMovieTheatreComponent,AddMovieComponent],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
