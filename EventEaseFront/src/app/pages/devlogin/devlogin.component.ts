import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../helper'; // Ensure this import is correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-devlogin',
  templateUrl: './devlogin.component.html',
  styleUrls: ['./devlogin.component.css']
})
export class DevloginComponent {
  user = {
    name: '',
    role: '',
    college: '',
    password: ''
  };

  constructor(private http: HttpClient, private snack: MatSnackBar,private router:Router) {}

  signup() {
    this.http.post(`${baseUrl}/com-user-signup`, this.user).subscribe(
      (response: any) => {
        this.snack.open('Sign up successful', '', { duration: 3000 });
        this.router.navigateByUrl("/login")
      },
      (error: any) => {
        console.error('An error occurred:', error);
        this.snack.open('Sign up failed', '', { duration: 3000 });
      }
    );
  }
}
