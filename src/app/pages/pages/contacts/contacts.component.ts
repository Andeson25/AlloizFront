import { Component, OnInit } from '@angular/core';
import {CallbackTopicService} from "../../../shared/service/callback-topic.service";
import {CallbackTopic} from "../../../shared/models/callback-topic";
import {Callback} from "../../../shared/models/callback";
import {CallbackService} from "../../../shared/service/callback.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[CallbackTopicService, CallbackService]
})
export class ContactsComponent implements OnInit {
  callbackForm: FormGroup;
  calbackTopics: CallbackTopic[] =[];
  callback: Callback = new Callback();
  constructor(private _callbackTopic: CallbackTopicService, private  _callback: CallbackService) {
    this._callbackTopic.findAllAvailable().subscribe(next=>{
      this.calbackTopics=next;
    }, error=>{
      console.log(error)
    },()=>{
      console.log(this.calbackTopics);
    })
  }

  ngOnInit() {
    this.callbackForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(/\d{6,12}/)]),
      company: new  FormControl(''),
      callbackTopic: new FormControl('')
      });
    this.callbackForm.valueChanges.subscribe(value => this.callback=value)
  }
  addContacts(){
     this._callback.save(this.callback).subscribe(next=>{
       console.log(next)
     },
       error=>{
       console.log(error)
       })
  }

}
