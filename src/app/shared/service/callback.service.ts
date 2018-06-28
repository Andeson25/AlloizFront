
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CallbackService{

  controller = "/callback"

  constructor(private _httpClient: HttpClient){

  }

  findAll():Observable<Callback>
}
