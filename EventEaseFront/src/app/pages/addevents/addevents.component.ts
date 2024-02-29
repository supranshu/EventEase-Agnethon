import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../helper';
import { EventService } from '../../services/event.service';

interface EventData {
  evName: string;
  date: string;
  time: string;
  venue: string;
  comment: string;
}

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent {
  public eventData: EventData[] = [];
  
  public evName: string = '';
  public date: string ='';
  public time: string = '';
  public venue: string = '';
  public comment: string = '';

  constructor(private http: HttpClient, private snack: MatSnackBar, private service:EventService) {}

  public addEvent(): void {
    const newEvent: EventData = {
      evName: this.evName,
      date: this.formatDate(this.date),
      time: this.time,
      venue: this.venue,
      comment: this.comment
    };
  
    const collegeName = localStorage.getItem('college');
    const committeeName = localStorage.getItem('name');
  
    this.http.get(`${baseUrl}/exist/${newEvent.date}/${newEvent.venue}`).subscribe(
      (response) => {
        console.log(response);
        if (response == true) {
          this.snack.open("Event on this date and venue already exist", '', { duration: 5000 });
        } else {
          if (collegeName && committeeName) {
            this.http.post(`${baseUrl}/upload-event/${committeeName}/${collegeName}`, newEvent).subscribe(
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
      },
      (error) => {
        console.error('Error checking event existence:', error);
        this.snack.open('Error checking event existence', '', { duration: 3000 });
      }
    );
  }
  

  private clearFormData(): void {
    this.evName = '';
    this.date = '' // Reset date to current date
    this.time = '';
    this.venue = '';
    this.comment = '';
  }
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
  
    // Format: YYYY-MM-DD
    return `${year}-${month}-${day}`;
  }
}
