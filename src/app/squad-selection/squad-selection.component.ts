import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SquadService } from '../services/squad.service';
import { Squad } from '../dto/squad';

@Component({ 
  selector: 'app-squad-selection',
  templateUrl: './squad-selection.component.html',
  styleUrls: ['./squad-selection.component.css']
})

export class SquadSelectionComponent {

  @Output() onSelect = new EventEmitter<String>()
  squads : Squad[]; 

  constructor(private http: HttpClient,
              private squadService : SquadService,) { }

  ngOnInit() {
    this.getSquads();
  }

    /**
   * Function to retrieve the squad list
   */
  getSquads(){
    this.squadService.getSquads().subscribe(squads => { 
      this.squads = squads as Squad[];
    });
  }

  emitSelectedSquad(){
    this.onSelect.emit("selected");
  }
}
