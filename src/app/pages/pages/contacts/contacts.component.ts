import {Component, OnInit} from '@angular/core';
import {CallbackTopicService} from '../../../shared/service/callback-topic.service';
import {CallbackTopic} from '../../../shared/models/callback-topic';
import {Callback} from '../../../shared/models/callback';
import {CallbackService} from '../../../shared/service/callback.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderTypeService} from '../../../shared/service/order-type.service';
import {OrderType} from '../../../shared/models/order-type';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [CallbackTopicService, CallbackService, OrderTypeService]
})
export class ContactsComponent implements OnInit {
  callbackForm: FormGroup;
  calbackTopics: CallbackTopic[] = [];
  orderTypes: OrderType[] = [];
  callback: Callback = new Callback();
  showOrder: boolean = false;
  orderTypeName:string='';

  constructor(private _callbackTopic: CallbackTopicService, private  _callback: CallbackService, private _orderTypeService: OrderTypeService) {
    this._callbackTopic.findAllAvailable().subscribe(next => {
      this.calbackTopics = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log(this.calbackTopics);
    });
    this._orderTypeService.findAll().subscribe(next => {
      this.orderTypes = next;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.callbackForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(/\d{6,12}/)]),
      company: new FormControl(''),
      callbackTopic: new FormControl(''),
    });
    this.callbackForm.valueChanges.subscribe(value => {
      this.callback = value;
      console.log(this.callback);

    });
  }
  addType(sel:HTMLSelectElement){
    this.orderTypeName=sel.value;
  }
  addContacts() {
    if(this.showOrder){
      this.callback.message=this.orderTypeName+":\n"+this.callback.message;
    }
    this._callback.save(this.callback).subscribe(next => {
        console.log(next);
      },
      error => {
        console.log(error);
      });
  }

  checkOrder(sel: HTMLSelectElement) {
    if (this.callback.callbackTopic.name == 'Order') {
      this.showOrder = true;
    } else
      this.showOrder = false;
  }

}
