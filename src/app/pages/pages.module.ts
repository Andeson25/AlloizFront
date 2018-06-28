import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import {GlobalImportsModule} from '../shared/config/global-imports.module';
import {MenuComponent} from '../source/menu/menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import {HeaderComponent} from '../source/header/header.component';
import {DirectiveModule} from "../shared/directive/directive.module";

@NgModule({
  imports: [
    GlobalImportsModule,
    DirectiveModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    MenuComponent,
    PortfolioComponent,
    HeaderComponent]
})
export class PagesModule { }
