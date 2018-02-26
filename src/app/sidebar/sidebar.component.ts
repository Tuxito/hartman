import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBar {  
  sideBarInactive = false;

  toggleSideBar(){
    this.sideBarInactive = !this.sideBarInactive;
  }
}
