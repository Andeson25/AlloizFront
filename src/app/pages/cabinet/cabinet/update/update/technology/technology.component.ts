import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../../../../shared/models/technology";
import {TechnologiesSerivce} from "../../../../../../shared/service/technologies.serivce";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologiesSerivce]
})
export class TechnologyComponent implements OnInit {
  technology: Technology[]=[];
  constructor(private _technology: TechnologiesSerivce) {
    _technology.findAll().subscribe(next=>{
        this.technology=next;
      }
    )
  }

  ngOnInit() {
  }

}
