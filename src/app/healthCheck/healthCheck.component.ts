import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicService } from './../services/topic.service';
import { SquadService } from './../services/squad.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './healthCheck.component.html',
  styleUrls: ['./healthCheck.component.css']
})

export class HealthCheckComponent implements OnInit{
  squads : any[];
  topics : any[];

  constructor(
    private http: HttpClient,
    private squadService : SquadService,
    private topicService : TopicService
  ) { }

  ngOnInit() {
    this.getSquads();
    this.getTopics();  
  }

  /**
   * Function to retrieve all the active topics
   */
  getTopics(){
    this.topicService.getActiveTopics().subscribe(data => {
      this.topics = data;
    });
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
   * Function to set the value for a topic and team
   */
  setValue(topicIndex : number, squadIndex : number){
    console.log("Value! (" + topicIndex + "," + squadIndex + ")");
  }
}
