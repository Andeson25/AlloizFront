import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {OrderType} from "../models/order-type";

@Injectable()
export class OrderTypeService {

  controller = "/order-type";

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<OrderType[]> {
    return this._httpClient.get<OrderType[]>(this.controller + '/find-all').catch(err => Observable.throw(err))
  }

  findAllAvailable(): Observable<OrderType[]> {
    return this._httpClient.get<OrderType[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<OrderType> {
    return this._httpClient.get<OrderType>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<OrderType> {
    return this._httpClient.get<OrderType>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(orderType: OrderType): Observable<OrderType> {
    return this._httpClient.post<OrderType>(this.controller + '/save', JSON.stringify(orderType)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

  update(orderType: OrderType): Observable<OrderType> {
    return this._httpClient.post<OrderType>(this.controller + '/update', JSON.stringify(orderType)).catch(err => Observable.throw(err))
  }


}
