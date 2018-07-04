import {Component, OnInit,} from '@angular/core';
import {MenuService} from '../menu-service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  show: boolean = false;
  workButton=true;


  constructor(private menu: MenuService) {
    this.menu.show$.subscribe(next => {
      if (next){
        this.show = next;
      }
      if (!next){
        this.workButton=false;
        setTimeout(() => {
          this.show = next;
          this.workButton=true;
        }, 200);
      }
    });
  }

  closeMenu() {
    if(this.workButton)
      this.menu.showMenu(false);
  }

  ngOnInit(): void {

  }

}
