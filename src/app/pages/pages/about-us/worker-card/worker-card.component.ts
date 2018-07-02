import {Component, Input, OnInit} from '@angular/core';
import {Worker} from "../../../../shared/models/worker";

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {
  @Input('worker') worker: Worker;
  constructor() { }

  ngOnInit() {
  }

}
