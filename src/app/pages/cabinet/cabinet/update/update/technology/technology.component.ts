import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../../../../shared/models/technology";
import {TechnologyService} from "../../../../../../shared/service/technology.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologyService]
})
export class TechnologyComponent implements OnInit {
  technology: Technology[]=[];
  constructor(private _technology: TechnologyService) {
    _technology.findAll().subscribe(next=>{
        this.technology=next;
      }
    )
  }

  ngOnInit() {
  }

}
