import { Component, OnInit } from '@angular/core';

import { HealthCheckService } from './../services/healthCheck.service';
import { HealthCheck } from '../dto/healthCheck';

@Component({
  selector: 'app-health-checks-content',
  templateUrl: './healthChecks-content.component.html',
  styleUrls: ['./healthChecks-content.component.css']
})

export class HealthChecksContentComponent implements OnInit{

  healthCheckList : HealthCheck[];

  constructor(
    private healthCheckService : HealthCheckService
  ) { }
  
  ngOnInit() {
    this.getHealthChecks();
  }

  /**
   * Function to retrieve the squad list
   */
  getHealthChecks(){
    this.healthCheckService.getHealthChecks().subscribe(data => {
      console.log('Getting healthCheck list');
      this.healthCheckList = (data as HealthCheck[]);
    });
  }
}
