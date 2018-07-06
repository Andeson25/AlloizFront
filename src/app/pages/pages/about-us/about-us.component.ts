import { Component, OnInit } from '@angular/core';
import {WorkerService} from "../../../shared/service/worker.service";
import {Worker} from "../../../shared/models/worker";
import {isNullOrUndefined} from "util";

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
      for(let i of next){
        if (typeof(i) != "undefined" && i != null){
          this.workers.push(i);
        }
      }
        this.workers=next;
    },error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

  isNull(object: any): Boolean {
    if (Array.isArray(object)) {
      return !isNullOrUndefined(object[0]);
    } else {
      return !isNullOrUndefined(object)
    }
  }
}
