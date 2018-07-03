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

  topic: CallbackTopic = new CallbackTopic();
  constructor(private  _callBackTopic: CallbackTopicService) { }

  ngOnInit() {
  }

addTopic(){
    this._callBackTopic.save(this.topic).subscribe(next=>{
      console.log(next);
    },error=>{
      console.log(error);
    })
  }
}
