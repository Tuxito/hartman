import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  toggleSideBar(event) {
    //$('#sidebar').toggleClass('active');
    
    console.log(event);
  }
}
