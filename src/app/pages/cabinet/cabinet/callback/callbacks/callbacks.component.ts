import { Component, OnInit } from '@angular/core';
import {Callback} from '../../../../../shared/models/callback';
import {CallbackService} from '../../../../../shared/service/callback.service';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.css'],
  providers: [CallbackService]
})
export class CallbacksComponent implements OnInit {
  callbacks: Callback[] = [];
  callback: Callback = new Callback();
  constructor(private _callbackService:CallbackService) {
    _callbackService.findAll().subscribe(next=>{
      console.log(next);
      this.callbacks=next;}
    )
  }

  ngOnInit() {
  }

}
