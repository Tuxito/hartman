import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-squad-detail',
  templateUrl: './squad-detail.component.html',
  styleUrls: ['./squad-detail.component.css']
})

export class SquadDetailComponent implements OnInit{
  squadId : String;

  constructor(
    private route: ActivatedRoute,
    private location : Location
  ) {}

  ngOnInit(): void {
    this.squadId = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }
}
