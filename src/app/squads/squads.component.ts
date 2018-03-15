import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squad } from './squad';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})

export class SquadsComponent implements OnInit{
  squadName: String;
  squads: Squad[];
  
  squadSelected: String;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/squads/').subscribe(res => {
      this.squads = Object.keys(res).map(function(squadIndex){
        let squad = new Squad();
        squad.id = res[squadIndex]._id;
        squad.name = res[squadIndex].name;        
       
        return squad;
      });      
    },
    err => {
      console.log('Error occured');
    });
  }

  /**
   * Function to create a new squad. Squadname is given
   * @param event 
   */
  createSquad(event) {
    this.http.post('http://localhost:3000/squads/', { squadName : this.squadName}).subscribe(res => {
      //this.squads.push(this.squadName);
    },
    err => {
      console.log('Error occured');
    });
  }

  /**
   * Function to navigate to the squad details
   * @param squadSelected 
   */
  loadSquadDetail(squadSelected : Squad){
    console.log(squadSelected);
  }

}
