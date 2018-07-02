import {Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {MenuService} from '../menu-service';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  show: boolean = false;



  constructor(private menu: MenuService) {
    this.menu.show$.subscribe(next => {
      if (next)
        this.show = next;
      if (!next)
        setTimeout(() => {
          this.show = next;
        }, 500);
    });
  }

  closeMenu() {
    this.menu.showMenu(false);
  }

  ngOnInit(): void {

  }

}
