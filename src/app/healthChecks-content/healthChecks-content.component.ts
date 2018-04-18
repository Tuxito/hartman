import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HealthCheckService } from './../services/healthCheck.service';
import { HealthCheck } from '../dto/healthCheck';

@Component({
  selector: 'app-health-checks-content',
  templateUrl: './healthChecks-content.component.html',
  styleUrls: ['./healthChecks-content.component.css']
})

export class HealthChecksContentComponent {

  healthCheckList : HealthCheck[];

  constructor(
    private http: HttpClient,
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
