import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Worker} from "../models/worker";

@Injectable()
export class WorkerService {

  controller = "/worker";

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

  save(worker: Worker, form:HTMLFormElement): Observable<Worker> {
    let f=new FormData(form);
    f.append("workerJson",JSON.stringify(worker))
    return this._httpClient.post<Worker>(this.controller + '/save', f,{headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<Worker> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

  update(worker: Worker,form:HTMLFormElement): Observable<Worker> {
    let f=new FormData(form);
    f.append("worker",JSON.stringify(worker))
    return this._httpClient.post<Worker>(this.controller + '/update', f,{headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err))
  }



}
