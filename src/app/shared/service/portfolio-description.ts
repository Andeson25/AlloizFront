import {Injectable} from "@angular/core";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PortfolioDescription{

  controller = "/portfolio-description";

  constructor(private _httpClient:HttpClient){}

  findAll(): Observable<PortfolioDescription[]> {
    return this._httpClient.get<PortfolioDescription[]>(this.controller + '/find-all').catch(err => Observable.throw(err));
  }

  findAllAvailable(): Observable<PortfolioDescription[]> {
    return this._httpClient.get<PortfolioDescription[]>(this.controller + '/find-all-available').catch(err => Observable.throw(err))
  }

  findOne(id: number): Observable<PortfolioDescription> {
    return this._httpClient.get<PortfolioDescription>(this.controller + '/find-one/' + id).catch(err => Observable.throw(err))
  }

  findOneAvailable(id: number): Observable<PortfolioDescription> {
    return this._httpClient.get<PortfolioDescription>(this.controller + '/find-one-available/' + id).catch(err => Observable.throw(err))
  }

  save(portDesc: PortfolioDescription): Observable<PortfolioDescription> {
    return this._httpClient.post<PortfolioDescription>(this.controller + '/save', JSON.stringify(portDesc)).catch(err => Observable.throw(err))
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(this.controller + '/delete/' + id).catch(err => Observable.throw(err))
  }

  update(portDesc: PortfolioDescription): Observable<PortfolioDescription> {
    return this._httpClient.post<PortfolioDescription>(this.controller + '/update', JSON.stringify(portDesc)).catch(err => Observable.throw(err))
  }

}
