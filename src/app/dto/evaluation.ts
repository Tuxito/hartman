import { Scoring } from './scoring';

export class Evaluation {
  squad : String;
  ev : Scoring[];

  constructor(){
    this.ev = new Array<Scoring>();
  }
}