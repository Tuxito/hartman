import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  

import { HealthCheck } from '../dto/healthCheck';

@Injectable()  
export class HealthCheckService {  

    constructor(private http: Http) { } 
    
    /**
    * Function to retrieve all the topics
    */
    getHealthChecks(){
        return this.http.get('/healthChecks/')  
                .map((response: Response) => response.json())  
    }

    getHealthCheckById(id : String){
        
        return this.http.get('/healthChecks/' + id)  
                            .map((response: Response) => response.json());                
    }

    /**
     * Function to create a new topic only with name and description
     * @param squadName 
     */
    createHealthCheck(healthCheck : HealthCheck){
        return this.http.post('/healthChecks/', { healthCheck : healthCheck})
            .map((response: Response) => response.json());
    }   

}