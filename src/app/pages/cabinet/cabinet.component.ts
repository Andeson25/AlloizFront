import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WorkerService} from '../../shared/service/worker.service';
import {UserDetailsService} from '../../shared/service/user-details.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  constructor(private _router: Router, private _userDetailsService:UserDetailsService) { }

  logOut(){
    this._userDetailsService.deleteToken();
    this._router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
