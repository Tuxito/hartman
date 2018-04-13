import { Scoring } from './scoring';

export class Evaluation {
  topic : String;
  ev : Scoring[];

  constructor(){
    this.ev = new Array<Scoring>();
  }
}