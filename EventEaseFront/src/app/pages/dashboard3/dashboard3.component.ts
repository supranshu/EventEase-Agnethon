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
        this.approvedEvents = Object.values(data);
      },
      (error) => {
        console.error('Error fetching approved events:', error);
        this.snack.open('Error fetching approved events', '', { duration: 3000 });
      }
    );
  }

  registerForEvent(event: any): void {
    // Implement registration logic here
  }
}
