import { Component, OnInit } from '@angular/core';
import {OrderType} from '../../../../../../shared/models/order-type';
import {OrderTypeService} from '../../../../../../shared/service/order-type.service';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.css'],
  providers: [OrderTypeService]
})
export class OrderTypeComponent implements OnInit {

  orderType: OrderType[]=[];

  constructor(private _orderTypeService: OrderTypeService) {
    _orderTypeService.findAll().subscribe(next=>{
      console.log(next);
      this.orderType=next;
    },error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}


