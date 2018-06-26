import {Component, OnInit,} from '@angular/core';
import {MenuService} from '../menu-service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  show: boolean = false;

  constructor(private menu: MenuService) {
    this.menu.show$.subscribe(next => {
      alert('sub');
      this.show = next;
    });
  }

  closeMenu() {
    this.show = false;
    this.menu.showMenu(this.show);
  }








  ngOnInit() {

  }

}
