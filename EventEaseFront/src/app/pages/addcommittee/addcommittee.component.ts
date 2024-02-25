import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../helper';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-addcommittee',
  templateUrl: './addcommittee.component.html',
  styleUrls: ['./addcommittee.component.css']
})
export class AddcommitteeComponent {

  public comData = {
    comName: '',
    dept: '',
    info: ''
  };
  public userData = {
    password: '',
    name: this.comData.comName,
    role: 'Committee',
    college: localStorage.getItem('college')
  };

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  public addCommittee(): void {
    // Check if any field is empty
    if (!this.comData.comName || !this.comData.dept || !this.comData.info || !this.userData.password) {
      this.snack.open('All fields are required', '', { duration: 3000 });
      return;
    }

    // Send data to backend API
    this.http.post(`${baseUrl}/upload-committee/${this.userData.college}`,this.comData).subscribe(
      (response) => {
        console.log('Committee added successfully:', response);
        this.snack.open('Committee added successfully', '', { duration: 3000 });
        
      },
      (error) => {
        console.error('Error adding committee:', error);
        this.snack.open('Error adding committee', '', { duration: 3000 });
      }
    );
    this.http.post(`${baseUrl}/com-user-signup`,this.userData).subscribe(
      (response)=>{
        console.log('User added successfully:', response);
        this.resetForm();
      },
      (error)=>{
        console.error('Error adding user:', error);
      }    
    )
  }
  

  private resetForm(): void {
    this.comData = {
      comName: '',
      dept: '',
      info: ''
    };
    this.userData.password = '';
  }
}
