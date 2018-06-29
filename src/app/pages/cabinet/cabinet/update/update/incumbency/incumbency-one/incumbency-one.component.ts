import {Component, Input, OnInit} from '@angular/core';
import {Incumbency} from '../../../../../../../shared/models/incumbency';
import {IncumbencyService} from '../../../../../../../shared/service/incumbency.service';

@Component({
  selector: 'app-incumbency-one',
  templateUrl: './incumbency-one.component.html',
  styleUrls: ['./incumbency-one.component.css'],
  providers: [IncumbencyService]
})
export class IncumbencyOneComponent implements OnInit {
  @Input('incumbency') incumbency : Incumbency;
  constructor(private _incumbencyService: IncumbencyService) { }

  ngOnInit() {
  }
  update(){
    this._incumbencyService.update(this.incumbency).subscribe(next=>{
      console.log(next);
    },error=>{
      console.log(error);
    })
  }

}
