import { Component, OnInit } from '@angular/core';
import { GearsService } from './shared/gears.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})

export class GearsComponent implements OnInit {
  gears: any = [];

  constructor(private gearsService: GearsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    /*
    this.gearsService.getAllGears().subscribe(gears => {
      this.gears = gears;
    });
    */
  }
}
