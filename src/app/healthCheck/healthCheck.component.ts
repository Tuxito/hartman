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

  selectedScore : String = "assets/images/red.png";

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

  openModal(template: TemplateRef<any>, scoring : Scoring) {
    this.selectedScore = "assets/images/red.png";
    this.tmpScore = scoring.score;
    this.evaluationScore = scoring; 
    this.modalRef = this.modalService.show(template);
  }

  setScore(score : number, imagePath : String){    
    this.evaluationScore.score = score;
    this.selectedScore = imagePath;
  }

  confirm(): void {
    this.modalRef.hide();
  }
 
  decline(): void {
    this.evaluationScore.score = this.tmpScore;
    this.modalRef.hide();
  }

  /**
   * Tunction to set the image in the ealuation grid
   * @param score 
   */
  checkScore(score : Number){
    let scoreImage : String;
    switch(score) { 
      case 0: { 
        scoreImage = "assets/images/red.png";
        break
      } 
      case 2: { 
        scoreImage = "assets/images/red-up.png";
        break
      }        
      case 3: { 
        scoreImage = "assets/images/orange-down.png";
        break
      }   
      case 5: { 
        scoreImage = "assets/images/orange.png";
        break; 
      }   
      case 7: { 
        scoreImage = "assets/images/orange-up.png";
        break
      }   
      case 8: { 
        scoreImage = "assets/images/green-down.png";
        break
      }   
      case 10: { 
        scoreImage = "assets/images/green.png";
        break
      }   
   }
   return scoreImage;
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
