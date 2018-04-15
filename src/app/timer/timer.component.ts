import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {

  timer : number;
  message : String;
  today : Date = new Date();

  constructor(){
    this.timer = 150;   
  }

  countdown(){
    setTimeout(()=>{
      if (this.timer === 0){
        this.message = "Tiempo agotado";
      } else{
        this.timer--;
        this.countdown();
      }
    },1000);
  }
}
