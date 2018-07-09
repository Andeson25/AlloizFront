import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import {GlobalImportsModule} from '../shared/config/global-imports.module';
import {MenuComponent} from '../source/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import {HeaderComponent} from '../source/header/header.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkerCardComponent } from './pages/about-us/worker-card/worker-card.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {DirectiveModule} from '../shared/directive/directive.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    GlobalImportsModule,
    DirectiveModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    MenuComponent,
    PortfolioComponent,
    HeaderComponent,
    ContactsComponent,
    AboutUsComponent,
    ServicesComponent,
    WorkerCardComponent,
    LoginComponent
  ]
})
export class PagesModule { }
