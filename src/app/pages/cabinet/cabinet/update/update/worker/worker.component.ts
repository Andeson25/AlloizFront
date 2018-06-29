import { Component, OnInit } from '@angular/core';
import {WorkerService} from '../../../../../../shared/service/worker.service';

import {Worker} from '../../../../../../shared/models/worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
  providers: [WorkerService]
})
export class WorkerComponent implements OnInit {
  workers: Worker[]=[];
  constructor(private _workerService:WorkerService) {
    _workerService.findAll().subscribe(next=>{
        this.workers=next;
      }
    )
  }

  ngOnInit() {
  }

}
