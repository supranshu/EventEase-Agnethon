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
    this.fetchEvents();
  }

  fetchEvents(): void {
    const collegeName = localStorage.getItem('college');
    if (collegeName) {
      this.eventService.getEventsByCollege(collegeName).subscribe(
        (data) => {
          this.events = data.map(event => {
            event.date = this.formatDate(event.date);
            return event;
          });
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
    this.eventService.accept(evName).subscribe(
      () => {
        this.snack.open('Event Accepted Successfully', '', { duration: 3000 });
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    // Format: YYYY-MM-DD
    return `${year}-${month}-${day}`;
  }

  hasEventEnded(eventDate: string): boolean {
    const today = new Date();
    const event = new Date(eventDate);
    return event < today;
  }

  
}
