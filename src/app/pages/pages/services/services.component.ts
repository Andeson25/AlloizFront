import { Component, OnInit } from '@angular/core';
import {TechnologiesSerivce} from '../../../shared/service/technologies.serivce';
import {Technology} from '../../../shared/models/technology';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[TechnologiesSerivce ]
})
export class ServicesComponent implements OnInit {
  technology: Technology[]=[];



  constructor(private _technologiesService: TechnologiesSerivce) {
    this._technologiesService.findAllAvailable().subscribe(next=>{
      this.technology=next;
    },error=>{
      console.log(error)
    }, ()=>{
      console.log(this.technology)

    })
  }

  ngOnInit() {
  }

}
