import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import baseUrl from '../../helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user = {
    name: '',
    password: '',
    role: 'Student',
    college: ''
  };

  constructor(private http: HttpClient, private snack: MatSnackBar, private router:Router) {}

  signUp(): void {
    this.http.post<any>(`${baseUrl}/com-user-signup`, this.user).subscribe(
      (response) => {
        this.snack.open('User signed up successfully', '', { duration: 3000 });
        this.router.navigateByUrl("/login")
      },
      (error) => {
        this.snack.open('Error signing up user. Please try again.', '', { duration: 3000 });
        // Handle error, such as displaying an error message
      }
    );
  }
}
