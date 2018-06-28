import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class TechnologiesSerivce {

  controller = "/technologies";

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Technologies[]> {
    return this._httpClient.get<Technologies[]>(this.controller + '/find-all').catch(err => Observable.throw(err))
  }

  findAllAvailable(): Observable<Technologies[]> {
    return this._httpClient.get<Technologies[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<Technologies> {
    return this._httpClient.get<Technologies>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<Technologies> {
    return this._httpClient.get<Technologies>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(tech: Technologies): Observable<Technologies> {
    return this._httpClient.post<Technologies>(this.controller + '/save', JSON.stringify(tech)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }


}
