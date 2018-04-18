import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicService } from '../services/topic.service';
import { SquadService } from '../services/squad.service';
import { HealthCheckService } from '../services/healthCheck.service';

import { Squad } from '../dto/squad';
import { Topic } from '../dto/topic';
import { HealthCheck } from '../dto/healthCheck';
import { Evaluation } from '../dto/evaluation';
import { Scoring } from '../dto/scoring';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-health-check',
  templateUrl: './healthCheck.component.html',
  styleUrls: ['./healthCheck.component.css']
})

export class HealthCheckComponent implements OnInit{
  modalRef: BsModalRef;

  topics : Topic[];
  squads : Squad[];

  healthCheck  : HealthCheck;

  evaluationScore : Scoring;
  tmpScore : number;

  constructor(
    private http: HttpClient,
    private squadService : SquadService,
    private topicService : TopicService,
    private modalService: BsModalService,
    private healthCheckService : HealthCheckService
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

  openModal(template: TemplateRef<any>, scoring : Scoring) {
    this.tmpScore = scoring.score;
    this.evaluationScore = scoring; 
    this.modalRef = this.modalService.show(template);
  }

  setScore(score : number){    
    this.evaluationScore.score = score;
  }

  confirm(): void {
    this.modalRef.hide();
  }
 
  decline(): void {
    this.evaluationScore.score = this.tmpScore;
    this.modalRef.hide();
  }

  /**
   * Function to set the value for a topic and team
   */
  saveHealthCheck(){
    console.log(this.healthCheck);
    this.healthCheckService.createHealthCheck(this.healthCheck).subscribe(newHealthCheck => {
      console.log('New healthcheck created: ' + newHealthCheck);      
    });
  }

}
