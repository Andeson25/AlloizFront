import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {MenuService} from '../menu-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MenuService]
})
@Injectable()
export class HeaderComponent implements OnInit {
  // @Output() boolMenu: EventEmitter<boolean>= new EventEmitter<boolean>();
  // @Input() show=false;
  show = false;

  constructor(private menu: MenuService) {
  }


  showMenu() {
    this.show = true;
    this.menu.showMenu(this.show);
    // this.boolMenu.emit(this.show);
  }

  ngOnInit() {
    this.menu.show$.subscribe(next=>{
      this.show=next;
    })
  }

}
