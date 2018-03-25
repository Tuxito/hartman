import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GearsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllGears() {
    return this.http.get('/api/gears')
      .map(res => res.json());
  }
}
