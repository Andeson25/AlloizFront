import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../source/menu-service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  show: boolean = false;

  constructor(private menu: MenuService) {
    this.menu.show$.subscribe(next => {
      this.show = next;
    });
  }

  ngOnInit() {
  }

}
