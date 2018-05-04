import { Component } from '@angular/core';
import { HealthCheckService } from './../services/healthCheck.service';

@Component({ 
  selector: 'app-health-check-detail',
  templateUrl: './healthCheck-detail.component.html',
  styleUrls: ['./healthCheck-detail.component.css']
})

export class HealthCheckDetailComponent {

  constructor(
    private healthCheckService : HealthCheckService
  ) { }

}
