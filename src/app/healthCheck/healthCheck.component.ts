import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicService } from '../services/topic.service';
import { SquadService } from '../services/squad.service';

import { Squad } from '../dto/squad';
import { Topic } from '../dto/topic';
import { HealthCheck } from '../dto/healthCheck';
import { Evaluation } from '../dto/evaluation';
import { Scoring } from '../dto/scoring';

@Component({
  selector: 'app-health-check',
  templateUrl: './healthCheck.component.html',
  styleUrls: ['./healthCheck.component.css']
})

export class HealthCheckComponent implements OnInit{
  topics : Topic[];
  squads : Squad[];

  healthCheck  : HealthCheck;

  constructor(
    private http: HttpClient,
    private squadService : SquadService,
    private topicService : TopicService
  ) { 
    
  }

  ngOnInit() {     
    this.healthCheck = new HealthCheck();
    this.getTopics();          
  }  

  /**
   * Function to retrieve all the active topics
   */
  getTopics(){
    this.topicService.getActiveTopics().subscribe(topics => {
      topics.forEach(topic => {
        let evaluation = new Evaluation();
        evaluation.topic = topic.name;

        this.squadService.getSquads().subscribe(squads => {            
          this.squads = (squads as Squad[]);

          squads.forEach(squad => {
            let scoring = new Scoring();
            scoring.squad = squad.name;
            scoring.score = 0;

            evaluation.ev.push(scoring);
          });
        });

        this.healthCheck.evaluations.push(evaluation);
      });
    });

    console.log(this.healthCheck);
  }

  /**
   * Function to retrieve the squad list
   */
  getSquads(){
    this.squadService.getSquads().subscribe(squads => {            

    });
  }


  /**
   * Function to set the value for a topic and team
   */
  saveHealthCheck(){
    console.log(this.healthCheck);
  }
}
