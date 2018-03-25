import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicService } from './../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit{
  topicName: String = new String();
  topicDescription: String = new String();
  topics: any[];
  
  constructor(
    private http: HttpClient,
    private topicService : TopicService
  ) { }

  ngOnInit() {
    this.getTopics();
  }

  /**
   * Function to retrieve the squad list
   */
  getTopics(){
    this.topicService.getTopics().subscribe(data => {
      console.log(data);
      this.topics = data;
    });
  }

  /**
   * Function to create a new squad. Squadname is given
   * @param event 
   */
  createTopic() {
    this.topicService.createTopic(this.topicName, this.topicDescription).subscribe(newTopic => {
      console.log('New topic : ' + newTopic);
      this.topics.push(newTopic);
    });
  }

  /**
   * Function to activate/desactivate the giben topic
   * @param id 
   */
  updateStatus(id : String){    
    this.topicService.updateTopic(id).subscribe(updatedTopic => {
      console.log('Topic ' + id + ' updated');
    });
  }
}
