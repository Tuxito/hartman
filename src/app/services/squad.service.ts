import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import { Squad } from '../dto/squad';

@Injectable()  
export class SquadService {  
  
  constructor(private http: Http) { }  
  
  /**
   * Function to retrieve all the squads
   */
  getSquads(){
    return this.http.get('/squads/')  
            .map((response: Response) => response.json())  
  }

  /**
   * Function to get the squad by Id
   * @param id 
   */
  getSquad(id : String){          
      return this.http.get('/squads/' + id)  
            .map((response: Response) => response.json())              
  }  
 
  /**
   * Function to create a new squad only with the name
   * @param squadName 
   */
  createSquad(squadName : String){
    return this.http.post('/squads/', { squadName : squadName})
        .map((response: Response) => response.json());
  }

  /**
   * Function used to update an existing squad
   * @param squad 
   */
  updateSquad(squad : Squad){
    console.log('Squad updated ' + squad._id);      
    return this.http.put('/squads/' + squad._id, { squad : squad})
        .map((response: Response) => response.json());  
  }

} 