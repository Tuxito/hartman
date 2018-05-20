import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HealthCheckService } from './../services/healthCheck.service';

@Component({ 
  selector: 'app-health-check-detail',
  templateUrl: './healthCheck-detail.component.html',
  styleUrls: ['./healthCheck-detail.component.css']
})

export class HealthCheckDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private healthCheckService : HealthCheckService
  ) { }

  ngOnInit(): void {
    this.getHealthCheck();
  }

  /**
   * Function to retrieve the healthcheck with the given id
   */
  getHealthCheck(){
    let id = this.route.snapshot.paramMap.get('id');

    this.healthCheckService.getHealthCheckById(id).subscribe(data => {      
      console.log(data);
    });
  }

}
