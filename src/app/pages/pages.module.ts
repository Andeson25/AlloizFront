import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import {GlobalImportsModule} from '../shared/config/global-imports.module';
import {MenuComponent} from '../source/menu/menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import {HeaderComponent} from '../source/header/header.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    MenuComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactsComponent]
})
export class PagesModule { }
