import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import {GlobalImportsModule} from '../shared/config/global-imports.module';
import {MenuComponent} from '../source/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [PagesComponent, HomeComponent,
    MenuComponent,
    AboutUsComponent]
})
export class PagesModule { }
