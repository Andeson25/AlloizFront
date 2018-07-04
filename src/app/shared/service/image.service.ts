import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Image} from "../models/image";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService{
  controller = "/image";

  constructor(private _httpClient: HttpClient) {}

  save(form:HTMLFormElement,id:number):Observable<Image>{
    let f  = new  FormData(form);
    return this._httpClient.post<Image>(this.controller+'/save/'+id,f,{headers: new HttpHeaders().append('enctype', 'multipart/form-data')}).catch(err => Observable.throw(err));
  }
  delete(id:number):Observable<Image> {
    return this._httpClient.delete<Image>(this.controller + '/delete/' + id).catch(err => Observable.throw(err));
  }
}
