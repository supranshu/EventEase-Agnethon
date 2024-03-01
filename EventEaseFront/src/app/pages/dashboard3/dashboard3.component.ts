import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {

  approvedEvents: any[] = [];

  constructor(private eventService: EventService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.eventService.getApprovedEvents().subscribe(
      (data) => {
        this.approvedEvents = Object.values(data).map(event => {
          event.date = this.formatDate(event.date);
          return event;
        });

        // Filter out events whose dates have passed
        this.approvedEvents = this.approvedEvents.filter(event => {
          const eventDate = new Date(event.date);
          const today = new Date();
          return eventDate >= today; // Keep events whose dates are today or in the future
        });
      },
      (error) => {
        console.error('Error fetching approved events:', error);
        this.snack.open('Error fetching approved events', '', { duration: 3000 });
      }
    );
  }

  registerForEvent(event: any): void {
    // Redirect to the registration form URL
    window.location.href = 'https://forms.gle/5vW1o9HPRutBc6AE6';
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
