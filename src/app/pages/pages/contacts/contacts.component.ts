import { Component, OnInit } from '@angular/core';
import {CallbackTopicService} from "../../../shared/service/callback-topic.service";
import {CallbackTopic} from "../../../shared/models/callback-topic";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[CallbackTopicService]
})
export class ContactsComponent implements OnInit {

  calbackTopics: CallbackTopic[] =[];
  constructor(private _callbackTopic: CallbackTopicService) {
    this._callbackTopic.findAllAvailable().subscribe(next=>{
      this.calbackTopics=next;
    }, error=>{
      console.log(error)
    },()=>{
      console.log(this.calbackTopics);
    })
  }

  ngOnInit() {
  }

}
