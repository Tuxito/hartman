import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  

@Injectable()  
export class TopicService {  

    constructor(private http: Http) { } 

  /**
  * Function to retrieve all the topics
  */
  getTopics(){
    return this.http.get('http://localhost:3000/topics/')  
            .map((response: Response) => response.json())  
  }

  /**
  * Function to create a new topic only with name and description
  * @param squadName 
  */
  createTopic(topicName : String, description : String){
    return this.http.post('http://localhost:3000/topics/', { topicName : topicName, description : description})
        .map((response: Response) => response.json());
  }

/**
 * Function to activate/desactivate a topic with given id
 * @param id 
 */
  updateTopic(id : String){
    console.log('Updating status ');      
    return this.http.put('http://localhost:3000/topics/' + id,{})
        .map((response: Response) => response.json()); 
  }
}