import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GearsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllGears() {
    console.log("entrando en gears.service");

    var gearInfo = this.http.get('/api/gears')
      .map(res => res.json());
    
      console.log(gearInfo);

      return gearInfo
  }
}