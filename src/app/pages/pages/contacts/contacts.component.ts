import { Component, OnInit } from '@angular/core';
import {CallbackTopicService} from "../../../shared/service/callback-topic.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
