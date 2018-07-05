import { Component, OnInit } from '@angular/core';
import {Callback} from '../../../../../shared/models/callback';
import {CallbackService} from '../../../../../shared/service/callback.service';
import {OrderTypeEnum} from '../../../../../shared/enum/order-type.enum';
import {CallBackTopicEnum} from '../../../../../shared/enum/call-back-topic.enum';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.css'],
  providers: [CallbackService]
})
export class CallbacksComponent implements OnInit {
  callbacks: Callback[] = [];
  callback: Callback = new Callback();
  orderType = OrderTypeEnum;
  callbackTopic=CallBackTopicEnum;
  constructor(private _callbackService:CallbackService) {
    _callbackService.findAll().subscribe(next=>{
      console.log(next);
      this.callbacks=next;
      }
    )
  }

  ngOnInit() {
  }

}
