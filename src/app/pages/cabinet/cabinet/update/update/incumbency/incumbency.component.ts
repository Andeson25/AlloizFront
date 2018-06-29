import { Component, OnInit } from '@angular/core';
import {IncumbencyService} from '../../../../../../shared/service/incumbency.service';
import {Incumbency} from '../../../../../../shared/models/incumbency';

@Component({
  selector: 'app-incumbency',
  templateUrl: './incumbency.component.html',
  styleUrls: ['./incumbency.component.css'],
  providers: [IncumbencyService]
})
export class IncumbencyComponent implements OnInit {
  incumbencies: Incumbency[]=[];
  constructor(private _incumbencyService: IncumbencyService) {
    _incumbencyService.findAll().subscribe(next=>{
      console.log(next);
      this.incumbencies=next;
    },error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
