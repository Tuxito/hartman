import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';  

@Injectable()
export class GearsService {

  constructor(private http: Http) { }

  /**
  * Function to retrieve all the gears
  */
  getAllGears(){
    return this.http.get('/gears/')  
            .map((response: Response) => response.json())  
  }

  
}
