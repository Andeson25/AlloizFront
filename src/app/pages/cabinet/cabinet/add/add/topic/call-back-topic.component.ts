import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CallbackTopic} from "../../../../../../shared/models/callback-topic";
import {CallbackTopicService} from "../../../../../../shared/service/callback-topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './call-back-topic.component.html',
  styleUrls: ['./call-back-topic.component.css'],
  providers: [CallbackTopicService]
})
export class CallBackTopicComponent implements OnInit {

  callBackTopicForm: FormGroup;
  callBackTopic: CallbackTopic = new CallbackTopic();

  constructor(private  _callBackTopicService: CallbackTopicService) {
  }

  ngOnInit() {
    this.callBackTopicForm = new FormGroup({
        name: new FormControl('', [Validators.required])
      }
    );

    this.callBackTopicForm.valueChanges.subscribe(next => {
      this.callBackTopic = next;
    }, error => {
      console.log(error)
    })

  }

  addTopic() {
    this._callBackTopicService.save(this.callBackTopic).subscribe(next => {
      console.log(next);
    }, error => {
      console.log(error);
    }, () => {
      this.callBackTopicForm.reset();
    })
  }
}
