import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MenuService {
  private show: Subject<boolean> = new Subject<boolean>();
  public show$ = this.show.asObservable();

  showMenu(bool: boolean) {
    this.show.next(bool);
  }


}
