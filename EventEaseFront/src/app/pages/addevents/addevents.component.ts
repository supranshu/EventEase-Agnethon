import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../helper';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent {
  public eventData = {
    evName: '',
    date: '',
    time: '',
    venue: '',
    comment: ''
  };

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  public addEvent(): void {
    const collegeName = localStorage.getItem('college');
    const committeeName = localStorage.getItem('name');
    if (collegeName && committeeName) {
      this.http.post(`${baseUrl}/upload-event/${committeeName}/${collegeName}`, this.eventData).subscribe(
        (response) => {
          console.log('Event added successfully:', response);
          this.snack.open('Event added successfully', '', { duration: 3000 });
          // Clear the form data after successful addition
          this.clearFormData();
        },
        (error) => {
          console.error('Error adding event:', error);
          this.snack.open('Error adding event', '', { duration: 3000 });
        }
      );
    } else {
      console.error('College name or committee name not found in local storage');
      this.snack.open('College name or committee name not found', '', { duration: 3000 });
    }
  }

  private clearFormData(): void {
    this.eventData = {
      evName: '',
      date: '',
      time: '',
      venue: '',
      comment: ''
    };
  }
}
