import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-content',
  templateUrl: './stats-content.html',
  styleUrls: ['./stats-content.css']
})

export class StatsComponent {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [0, 3, 10, 8], label: 'Delivery value'},
    { data: [5, 7, 5, 10], label: 'Easy to release'},
    { data: [7, 5, 8, 5], label: 'Fun'},
    { data: [8, 3, 7, 8], label: 'Health Codebase'},
    { data: [3, 8, 5, 7], label: 'Learning'},
    { data: [5, 5, 3, 7], label: 'Mission'},
    { data: [7, 7, 5, 3], label: 'Speed'},
    { data: [0, 10, 7, 8], label: 'Teamwork'}
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

}
