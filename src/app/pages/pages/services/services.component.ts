import { Component, OnInit } from '@angular/core';
import {TechnologyService} from '../../../shared/service/technology.service';
import {Technology} from '../../../shared/models/technology';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[TechnologyService ]
})
export class ServicesComponent implements OnInit {
  technologies: Technology[]=[];



  constructor(private _technologiesService: TechnologyService) {
    this._technologiesService.findAllAvailable().subscribe(next=>{
      for(let i of next){
        if (typeof(i) != "undefined" && i != null){
          this.technologies.push(i);
        }
      }
    },error=>{
      console.log(error)
    }, ()=>{

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
