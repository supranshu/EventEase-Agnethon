import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewcommittee',
  templateUrl: './viewcommittee.component.html',
  styleUrls: ['./viewcommittee.component.css']
})
export class ViewcommitteeComponent implements OnInit {

  committees: any[] = [];

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchCommittees();
  }

  fetchCommittees(): void {
    const collegeName = localStorage.getItem('college');
    if (collegeName) {
      this.http.get<any[]>(`http://localhost:8080/eventease/com-by-clg-name/${collegeName}`).subscribe(
        (data) => {
          this.committees = data;
        },
        (error) => {
          console.error('Error fetching committees:', error);
          this.snack.open('Error fetching committees', '', { duration: 3000 });
        }
      );
    } else {
      console.error('College name not found');
      this.snack.open('College name not found', '', { duration: 3000 });
    }
  }

}
