import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderType} from '../../../../../../shared/models/order-type';
import {OrderTypeService} from '../../../../../../shared/service/order-type.service';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.css'],
  providers:[OrderTypeService]
})
export class OrderTypeComponent implements OnInit {

  orderTypeForm: FormGroup;
  orderType: OrderType = new OrderType();



  constructor( private _orderTypeService:OrderTypeService) {
  }

  ngOnInit() {
    this.orderTypeForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)])
      }
    );
    this.orderTypeForm.valueChanges.subscribe(next => {
      this.orderType= next;
    }, error => {
      console.log(error);
    });
  }


  addOrderType(){
    this._orderTypeService.save(this.orderType).subscribe(next=>{
      console.log(next);
    },error=>{
      console.log(error);
    })

  }


}
