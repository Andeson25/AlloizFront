import { Component, OnInit } from '@angular/core';
import {CallbackTopic} from "../../../../../../shared/models/callback-topic";
import {CallbackTopicService} from "../../../../../../shared/service/callback-topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './call-back-topic.component.html',
  styleUrls: ['./call-back-topic.component.css'],
  providers: [CallbackTopicService]
})
export class CallBackTopicComponent implements OnInit {
  topics: CallbackTopic[] = [];
  topic: CallbackTopic = new CallbackTopic();
  constructor( private _callBackTopic: CallbackTopicService) {
    _callBackTopic.findAll().subscribe(next=>{
      this.topics=next;})
  }

  ngOnInit() {
  }
  updateTopic(index, topicName, selectOption){
    this.topic.name = topicName;
    this.topic.id = index+1;
    this.topic.available =selectOption;
    console.log(this.topic);
    this._callBackTopic.update(this.topic).subscribe(next=>{
      this.topic=next;
    },error=>{
      console.log(error);
    })
  }

}
