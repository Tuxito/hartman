import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squad } from './squad';
import { SquadService } from './../services/squad.service';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})

export class SquadsComponent implements OnInit{
  squadName: String;
  squads: any[];
  
  constructor(
    private http: HttpClient,
    private squadService : SquadService
  ) { }

  ngOnInit() {
    this.getSquads();
  }

  /**
   * Function to retrieve the squad list
   */
  getSquads(){
    this.squadService.getSquads().subscribe(data => {
      this.squads = data;
    });
  }

  /**
   * Function to create a new squad. Squadname is given
   * @param event 
   */
  createSquad() {
    this.squadService.createSquad(this.squadName).subscribe(newSquad => {
      console.log('New Squad : ' + newSquad);
      this.squads.push(newSquad);
    });

    //this.http.post('http://localhost:3000/squads/', { squadName : this.squadName}).subscribe(res => {
    //console.log(res);  
    //this.squads.push(this.squadName);
    //},
    //err => {
    //  console.log('Error occured');
    //});
  }
}
