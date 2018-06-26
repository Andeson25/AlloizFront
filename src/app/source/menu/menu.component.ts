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
  @ViewChild('menu') menuDiv: ElementRef;


  constructor(private menu: MenuService) {


  }

  closeMenu() {
    this.menu.showMenu(false);
  }

  ngOnInit(): void {
    this.menu.show$.subscribe(next => {
      // if (!this.show)
        this.show = next;
      // else if (!isNullOrUndefined(this.menuDiv)) {
      //   if (this.show) {
      //     this.menuDiv.nativeElement.style.classList.removeClass('hide');
      //     this.menuDiv.nativeElement.style.classList.addClass('show');
      //   }
      //   if (!this.show) {
      //     this.menuDiv.nativeElement.style.classList.removeClass('show');
      //     this.menuDiv.nativeElement.style.classList.add('hide');
      //     this.show = false;
      //   }
      // }
    });
  }

}
