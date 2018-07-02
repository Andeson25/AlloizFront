import { Component, OnInit } from '@angular/core';
import {WorkerService} from "../../../shared/service/worker.service";
import {Worker} from "../../../shared/models/worker";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [WorkerService]
})
export class AboutUsComponent implements OnInit {
  workers:Worker[]=[];
  constructor(private _workerService:WorkerService) {
    this._workerService.findAllAvailable().subscribe(next=>{
        this.workers=next;
    },error=>{
      console.log(error);
    })
  }




  ngOnInit() {
  }

}
