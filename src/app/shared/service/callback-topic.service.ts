import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {CallbackTopic} from "../models/callback-topic";

@Injectable()
export class CallbackTopicService {

  controller = "/callback-topic";

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<CallbackTopic[]> {
    return this._httpClient.get<CallbackTopic[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<CallbackTopic[]> {
    return this._httpClient.get<CallbackTopic[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<CallbackTopic> {
    return this._httpClient.get<CallbackTopic>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<CallbackTopic> {
    return this._httpClient.get<CallbackTopic>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(callback: CallbackTopic): Observable<CallbackTopic> {
    return this._httpClient.post<CallbackTopic>(this.controller + '/save', JSON.stringify(callback)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

  update(callback: CallbackTopic): Observable<CallbackTopic> {
    return this._httpClient.post<CallbackTopic>(this.controller + '/update', JSON.stringify(callback)).catch(err => Observable.throw(err))
  }


}
