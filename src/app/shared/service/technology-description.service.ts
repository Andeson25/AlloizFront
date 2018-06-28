
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {TechnologyDescription} from "../models/technology-description";

@Injectable()
export class TechnologyDescriptionService{

  controller = "/technology-description";

  constructor(private _httpClient:HttpClient){}

  findAll(): Observable<TechnologyDescription[]> {
    return this._httpClient.get<TechnologyDescription[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<TechnologyDescription[]> {
    return this._httpClient.get<TechnologyDescription[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<TechnologyDescription> {
    return this._httpClient.get<TechnologyDescription>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<TechnologyDescription> {
    return this._httpClient.get<TechnologyDescription>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(techDesc: TechnologyDescription): Observable<TechnologyDescription> {
    return this._httpClient.post<TechnologyDescription>(this.controller + '/save', JSON.stringify(techDesc)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

  update(techDesc: TechnologyDescription): Observable<TechnologyDescription> {
    return this._httpClient.post<TechnologyDescription>(this.controller + '/update', JSON.stringify(techDesc)).catch(err => Observable.throw(err))
  }
}
