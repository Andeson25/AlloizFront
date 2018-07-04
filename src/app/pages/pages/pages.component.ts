import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuService} from '../../source/menu-service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  show: boolean = false;
  @ViewChild('menuDiv') menuDiv: HTMLDivElement;

  constructor(private menu: MenuService) {

    this.menu.show$.subscribe(next => {
      this.show = next;
      if (next) {
        document.getElementById('menuDiv').style.opacity = '1';
      } else if (!next) {
        document.getElementById('menuDiv').style.opacity = '0';
      }
    });
  }

  ngOnInit() {

  }

}
