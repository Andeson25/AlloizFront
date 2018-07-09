import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserDetailsService} from "../service/user-details.service";

@Injectable()
export class AdminGuards implements CanActivate {
  constructor(private  _userDet: UserDetailsService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._userDet.checkAuth();
  }
}
