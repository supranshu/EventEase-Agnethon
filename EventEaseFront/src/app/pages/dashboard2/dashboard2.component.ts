import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  events: any[] = [];

  constructor(private eventService: EventService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    const comName = localStorage.getItem('name');  
    if (comName) {
      this.eventService.getEventsByCommittee(comName).subscribe(
        (data) => {
          this.events = Object.values(data).map(event => {
            event.date = this.formatDate(event.date);
            return event;
          });
        },
        (error) => {
          console.error('Error fetching events by committee:', error);
          this.snack.open('Error fetching events by committee', '', { duration: 3000 });
        }
      );
    } else {
      console.error('Committee name not found in local storage');
      this.snack.open('Committee name not found in local storage', '', { duration: 3000 });
    }
  }

  approveEvent(event: any): void {
    // Call the service method to approve the event
    // Update the event's approval status and refresh the view
  }

  rejectEvent(event: any): void {
    // Call the service method to reject the event
    // Update the event's rejection status and refresh the view
  }

  isEventOngoing(eventDate: string): boolean {
    const today = new Date();
    const event = new Date(eventDate);
  
    // Compare today's date to the event date
    return event >= today;
  }
  
  isEventEnded(eventDate: string): boolean {
    const today = new Date();
    const event = new Date(eventDate);
  
    // Compare today's date to the event date
    return event < today;
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
