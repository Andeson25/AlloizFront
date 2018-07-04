import {Component, Injectable, OnInit} from '@angular/core';
import {MenuService} from '../menu-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {
  workButton = true;
  show = false;

  constructor(private menu: MenuService) {
  }


  showMenu() {
    this.workButton = false;
    this.show = true;
    this.menu.showMenu(this.show);
  }

  ngOnInit() {
    if (this.workButton)
      this.menu.show$.subscribe(next => {
        this.show = next;
        if (!next)
          this.workButton = true;
      });
  }

}
