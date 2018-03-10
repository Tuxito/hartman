import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GearsService } from './shared/gears.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})

export class GearsComponent implements OnInit {
  gearName: String;
  gearEmail: String;
  squad : String;
  squads : String[];
  
  
  gears: any = [];

  constructor(private gearsService: GearsService, private http: HttpClient) { }

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

  createGear(event) {
    console.log(this.gearName + " - " + this.gearEmail);
    // this.http.post('http://localhost:3000/squads/', { squadName : this.squadName}).subscribe(res => {
    //   this.squads.push(this.squadName);
    // },
    // err => {
    //   console.log('Error occured');
    // });
  }
}
