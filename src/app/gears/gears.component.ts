import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GearsService } from '../services/gears.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})

export class GearsComponent implements OnInit {

  gearName : String
  gearEmail : String

  gears: any = [];

  constructor(private gearsService: GearsService, private http: HttpClient) { }

  ngOnInit() {
    
  }

  createGear(event) {

  }
}
