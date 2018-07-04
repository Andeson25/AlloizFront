import { Component, OnInit } from '@angular/core';
import {TechnologyService} from '../../../shared/service/technology.service';
import {Technology} from '../../../shared/models/technology';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[TechnologyService ]
})
export class ServicesComponent implements OnInit {
  technology: Technology[]=[];



  constructor(private _technologiesService: TechnologyService) {
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
