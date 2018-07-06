import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(  private  translate: TranslateService){
    this.translate.setDefaultLang('en/text');
    this.translate.addLangs(['uk/text', 'en/text', 'ru/text']);
  }
}
