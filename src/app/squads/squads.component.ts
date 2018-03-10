import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})

export class SquadsComponent implements OnInit{
  squadName: String;

  squads: String[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/squads/').subscribe(res => {
      this.squads = Object.keys(res).map(function(personNamedIndex){
        let person = res[personNamedIndex].name;
        // do something with person
        return person;
      });
    },
    err => {
      console.log('Error occured');
    });
  }

  createSquad(event) {
    this.http.post('http://localhost:3000/squads/', { squadName : this.squadName}).subscribe(res => {
      this.squads.push(this.squadName);
    },
    err => {
      console.log('Error occured');
    });
  }

}
