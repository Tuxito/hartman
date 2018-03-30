import { Evaluation } from './evaluation';

export class HealthCheck {
    
    _id: String;
    date : Date;
    evaluations : Evaluation[];

    constructor() { 
        this.date = new Date();
        this.evaluations = new Array<Evaluation>();
    }
}