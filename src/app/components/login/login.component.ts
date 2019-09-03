import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/service/movie.service';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private movieService: MovieService,
    private authService: AuthService) {
    this.dialogRef.disableClose = true;
    this.user = new User();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  login() {
    this.movieService.login(this.user).subscribe(result => {
      console.log(result);
      this.authService.setSession(result);
      this.dialogRef.close();
    });
  }
}
