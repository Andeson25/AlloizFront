import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  constructor(private _router: Router) { }

  logOut(){
    localStorage.clear();
    this._router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
