import {Component, Input, OnInit} from '@angular/core';
import {OrderType} from '../../../../../../../shared/models/order-type';
import {OrderTypeService} from '../../../../../../../shared/service/order-type.service';


@Component({
  selector: 'app-order-type-one',
  templateUrl: './order-type-one.component.html',
  styleUrls: ['./order-type-one.component.css'],
  providers: [OrderTypeService]
})
export class OrderTypeOneComponent implements OnInit {

  @Input('orderType') orderType : OrderType;

  constructor(private _OrderTypeService: OrderTypeService) { }

  ngOnInit() {
  }

  update(){
    this._OrderTypeService.update(this.orderType).subscribe(next=>{
      console.log(next);
    },error=>{
      console.log(error);
    })
  }

}
