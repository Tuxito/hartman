import { Component } from '@angular/core';
import { SideBarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sideBarInactive = false;
  btnLabel = '<';

  toggleSideBar() {
    this.sideBarInactive = !this.sideBarInactive;

    this.sideBarInactive ? this.btnLabel = '>' : this.btnLabel = '<';
  }
}
