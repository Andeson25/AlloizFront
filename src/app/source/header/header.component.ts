import {Component, Injectable, OnInit} from '@angular/core';
import {MenuService} from '../menu-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {
  show = false;

  constructor(private menu: MenuService) {
    this.menu.show$.subscribe(next => {
      this.show = next;
    });
  }


  showMenu() {
    this.show = true;
    this.menu.showMenu(this.show);
  }

  ngOnInit() {

  }
}
