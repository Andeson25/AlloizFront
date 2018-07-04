import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Technology} from '../models/technology';

@Injectable()
export class TechnologyService {

  controller = '/technology';

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<Technology[]> {
    return this._httpClient.get<Technology[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<Technology[]> {
    return this._httpClient.get<Technology[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err));
  }

  findOne(id: number): Observable<Technology> {
    return this._httpClient.get<Technology>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err));
  }

  findOneAvailable(id: number): Observable<Technology> {
    return this._httpClient.get<Technology>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err));

  }

  save(technologyJson: Technology, form: HTMLFormElement): Observable<Technology> {
    let f = new FormData(form);
    f.append('technologyJson', JSON.stringify(technologyJson));
    return this._httpClient.post<Technology>(this.controller + '/save', f, {headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err));
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err));
  }

  update(tech: Technology, form: HTMLFormElement): Observable<Technology> {
    let f = new FormData(form);
    f.append('technologyJson', JSON.stringify(tech));
    return this._httpClient.post<Technology>(this.controller + '/update', f, {headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err));
  }


}
