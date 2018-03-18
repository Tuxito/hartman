import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Squad } from '../squads/squad';
import { SquadService } from '../services/squad.service';


@Component({
  selector: 'app-squad-detail',
  templateUrl: './squad-detail.component.html',
  styleUrls: ['./squad-detail.component.css']
})

export class SquadDetailComponent implements OnInit{

  squad : Squad = new Squad();

  constructor(
    private route: ActivatedRoute,
    private location : Location,
    private http: HttpClient,
    private squadService : SquadService
  ) {}

  ngOnInit(): void {
    this.getSquad();
  }

  /**
   * Function to retrieve the squad data and load it in the squad
   * object to show it in the view
   */
  getSquad(){
      let id = this.route.snapshot.paramMap.get('id');
      
      this.squadService.getSquad(id).subscribe(data => {      
        this.squad.id = data._id;
        this.squad.name = data.name;
        this.squad.description = data.description;
      });
  }

  /**
   * Function to update the squad details
   */
  updateSquad(){
    console.log('Squad : ' + JSON.stringify(this.squad));     
    this.squadService.updateSquad(this.squad).subscribe(newSquad => {
      console.log('Squad updated');      
    });
  }

  goBack(): void {
    this.location.back();
  }
}
