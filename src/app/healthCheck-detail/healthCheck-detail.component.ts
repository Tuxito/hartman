import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HealthCheckService } from './../services/healthCheck.service';
import { HealthCheck } from '../dto/healthCheck';

import { Squad } from '../dto/squad';
import { Scoring } from '../dto/scoring';

@Component({ 
  selector: 'app-health-check-detail',
  templateUrl: './healthCheck-detail.component.html',
  styleUrls: ['./healthCheck-detail.component.css']
})

export class HealthCheckDetailComponent implements OnInit {

  header : Scoring[] = new Array();
  healthCheck : HealthCheck;
  squads : Squad[];

  constructor(
    private route: ActivatedRoute,
    private location : Location,
    private healthCheckService : HealthCheckService
  ) {
    this.getHealthCheck();
  }

  ngOnInit(): void {
    
  }

  /**
   * Function to retrieve the healthcheck with the given id
   */
  getHealthCheck(){
    let id = this.route.snapshot.paramMap.get('id');

    this.healthCheckService.getHealthCheckById(id).subscribe(data => { 
      this.healthCheck = data as HealthCheck;
      this.header = this.healthCheck.evaluations[0].ev;
      console.log(this.healthCheck);    
    });
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

  goBack(){
    this.location.back();
  }

}
