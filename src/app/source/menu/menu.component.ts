import {Component, OnInit,} from '@angular/core';
import {MenuService} from '../menu-service';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  show: boolean = false;
  workButton = true;
  lang: string = 'en';


  constructor(private menu: MenuService, private _translateService: TranslateService) {
    this.menu.show$.subscribe(next => {
      if (next) {
        this.show = next;
      }
      if (!next) {
        this.workButton = false;
        setTimeout(() => {
          this.show = next;
          this.workButton = true;
        }, 200);
      }
    });
  }

  closeMenu() {
    if (this.workButton)
      this.menu.showMenu(false);
  }

  switchLang(language: string) {
    this.lang = language;
    this._translateService.resetLang(this._translateService.getDefaultLang());
    this._translateService.use(language + '/text').subscribe(next => {
      console.log(next);
    }, error => {
      console.error(error);
    });
  }

  ngOnInit(): void {

  }

}
