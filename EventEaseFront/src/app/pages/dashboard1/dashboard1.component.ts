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

  approveEvent(event: any): void {
    // Implement event approval logic
    console.log('Event approved:', event);
    // You can call a service method here to send approval request to the backend
  }

  rejectEvent(event: any): void {
    // Implement event rejection logic
    console.log('Event rejected:', event);
    // You can call a service method here to send rejection request to the backend
  }
}
