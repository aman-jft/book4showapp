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
import { AddScheduleComponent } from './components/movie-theatre/add-schedule/add-schedule.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from 'src/app/service/auth.service';
import { CustomInterceptor } from 'src/app/service/custom.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookingComponent } from './components/booking/booking.component';
import { ListScheduleComponent } from './components/list-schedule/list-schedule.component';
import { DeleteComponent } from './components/movie-theatre/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieTheatreComponent,
    AddMovieTheatreComponent,
    AddMovieComponent,
    DisplayMovieComponent,
    AddScheduleComponent,
    LoginComponent,
    BookingComponent,
    ListScheduleComponent,
    DeleteComponent
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
  entryComponents: [
    AddMovieTheatreComponent,
    AddMovieComponent,
    AddScheduleComponent,
    LoginComponent,
    BookingComponent,
    DeleteComponent],
  providers: [MovieService, AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor ,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
