import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserDetailsService} from "../service/user-details.service";

@Injectable()
export class AdminGuards implements CanActivate {
  constructor(private  _userDet: UserDetailsService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._userDet.checkAuth()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
