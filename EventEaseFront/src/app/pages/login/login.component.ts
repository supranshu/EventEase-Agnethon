import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../helper'; // Ensure this import is correct
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name
})
export class LoginComponent {

  public loginData={
    name:'',
    password:''
  }

  constructor(private http:HttpClient, private snack:MatSnackBar, private router:Router){}

  public formSubmit() {
    console.log("clicked");
    if (!this.loginData.name || !this.loginData.password) {
      this.snack.open("Fill all the form Fields", '', {
        duration: 3000,
      });
      return;
    }
    this.http.get(`${baseUrl}/login/${this.loginData.name}/${this.loginData.password}`, { responseType: 'text' }).subscribe(
      (role: string) => {
        if (role.trim() === "false") {
          this.snack.open("Invalid Credentials", '', { duration: 3000 });
        } else {
          this.router.navigateByUrl("/dashboard1")
          this.snack.open("Login Successful", '', { duration: 3000 });
        }
      },
      (error: any) => {
        console.error('An error occurred:', error);
        // Handle error if needed
      }
    );
  }
  
}
