import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})

export class SquadsComponent implements OnInit{
  squadName: String;

  squads: String[] = ['Mr. Nice', 'Second name', 'Bombasto', 'Dr. IQ'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    /*this.http.get('http://localhost:3000/squads/').subscribe(res => {
      console.log(res);
    },
    err => {
      console.log('Error occured');
    });*/
  }

  createSquad(event) {
    this.http.post('http://localhost:3000/squads/', { squadName : this.squadName}).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log('Error occured');
    });
  }

}
