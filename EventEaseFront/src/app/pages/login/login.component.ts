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
    password:'',
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
    this.http.get(`${baseUrl}/login/${this.loginData.name}/${this.loginData.password}`).subscribe(
      (response:any) => {
        
        if (response.role.trim() ==null) {
          this.snack.open("Invalid Credentials", '', { duration: 3000 });
        } else {
          if(response.role=='Principal' || response.role=='Dean' || response.role=='Hod' || response.role=='Mentor'){
            this.router.navigateByUrl("/dashboard1")
            localStorage.setItem("college",response.college)
            localStorage.setItem("role",response.role)
            localStorage.setItem("name",this.loginData.name) 
          }
          else if(response.role=='Committee'){
            this.router.navigateByUrl("/dashboard2")
            localStorage.setItem("college",response.college)
            localStorage.setItem("role",response.role)
            localStorage.setItem("name",this.loginData.name)
          }
          else{
            
          }
          
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
