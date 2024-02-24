import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../../services/event.service';



@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  events: any[] = [];

  constructor(private eventService: EventService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    // Fetch events when the component initializes
    this.fetchEvents();
  }

  fetchEvents(): void {
    // Assume collegeName is obtained from localStorage or from login
    const collegeName = localStorage.getItem('college');
    if (collegeName) {
      this.eventService.getEventsByCollege(collegeName).subscribe(
        (data) => {
          this.events = data;
        },
        (error) => {
          console.error('Error fetching events:', error);
          this.snack.open('Error fetching events', '', { duration: 3000 });
        }
      );
    } else {
      console.error('College name not found');
      this.snack.open('College name not found', '', { duration: 3000 });
    }
  }

  approveEvent(evName: string): void {
    // Call the service method to approve the event
    this.eventService.accept(evName).subscribe(
      () => {
        this.snack.open('Event Rejected Successfully', '', { duration: 3000 });
        this.events = this.events.filter(event => event.evName !== evName);
      },
      (error) => {
        console.error('Error approving event:', error);
        this.snack.open('Error approving event', '', { duration: 3000 });
      }
    );
  }
  

  rejectEvent(evName: any): void {
    this.eventService.reject(evName).subscribe(
      () => {
        this.snack.open('Event Rejected Successfully', '', { duration: 3000 });
        this.events = this.events.filter(event => event.evName !== evName);
      },
      (error) => {
        console.error('Error Rejecting event:', error);
        this.snack.open('Error Rejecting event', '', { duration: 3000 });
      }
    );
  }
}
