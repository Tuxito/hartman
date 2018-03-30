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

  healthCheck  : HealthCheck;


  constructor(
    private http: HttpClient,
    private squadService : SquadService,
    private topicService : TopicService
  ) { 
    this.healthCheck  = new HealthCheck();
  }

  ngOnInit() {
    this.getSquads();
    this.getTopics();     
  }

  /**
   * Function to retrieve all the active topics
   */
  getTopics(){
    this.topicService.getActiveTopics().subscribe(data => {
      this.topics = (data as Topic[]);

      data.forEach(topic => {
        let scoring = new Scoring();
        scoring.indicator = (topic as Topic).name;
        scoring.score = 0;

        this.healthCheck.evaluations.forEach(squadEvaluations => {        
          squadEvaluations.ev.push(scoring);
        });  
      });
    });
  }

  
  /**
   * Function to retrieve the squad list
   */
  getSquads(){
    this.squadService.getSquads().subscribe(squads => {            
      squads.forEach(squad => {
        let evaluation = new Evaluation();  
        evaluation.squad = (squad as Squad).name;
        this.healthCheck.evaluations.push(evaluation);
      });
    });
  }

  /**
   * Function to set the value for a topic and team
   */
  saveHealthCheck(){
    console.log(this.healthCheck);
  }

  /**
   * Function needed to track elements with into ngFor
   * @param index 
   * @param item 
   */
  trackByTopicIndex(index: number, item) {
    return index;
  }

  trackBySquadIndex(index: number, item) {
    return index;
  }
}
