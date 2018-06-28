import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class IncumbencyService {

  controller = "/incumbency";

  constructor(private _httpClient: HttpClient) {

  }

  findAll(): Observable<Incumbency[]> {
    return this._httpClient.get<Incumbency[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<Incumbency[]> {
    return this._httpClient.get<Incumbency[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<Incumbency> {
    return this._httpClient.get<Incumbency>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<Incumbency> {
    return this._httpClient.get<Incumbency>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(callback: Incumbency): Observable<Incumbency> {
    return this._httpClient.post<Incumbency>(this.controller + '/save', JSON.stringify(callback)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

}
