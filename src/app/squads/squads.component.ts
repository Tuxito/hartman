import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squad } from '../dto/squad';
import { SquadService } from './../services/squad.service';


@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.css']
})

export class SquadsComponent implements OnInit{
  squadName: String = new String();
  squads: Squad[];
  
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
      this.squads = data as Squad[]; 
    });
  }

  /**
   * Function to create a new squad. Squadname is given
   * @param event 
   */
  createSquad() {
    this.squadService.createSquad(this.squadName).subscribe(newSquad => {
      this.squads.push(newSquad as Squad);
    });
  }
}
