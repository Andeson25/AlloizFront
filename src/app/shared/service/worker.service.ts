import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkerService {

  controller = "/technologies";

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Worker[]> {
    return this._httpClient.get<Worker[]>(this.controller + '/find-all').catch(err => Observable.throw(err))
  }

  findAllAvailable(): Observable<Worker[]> {
    return this._httpClient.get<Worker[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<Worker> {
    return this._httpClient.get<Worker>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvaialble(id: number): Observable<Worker> {
    return this._httpClient.get<Worker>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(worker: Worker): Observable<Worker> {
    return this._httpClient.post<Worker>(this.controller + '/save', JSON.stringify(worker)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<Worker> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }


}
