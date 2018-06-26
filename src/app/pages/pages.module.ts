import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import {GlobalImportsModule} from "../shared/config/global-imports.module";

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [PagesComponent, HomeComponent]
})
export class PagesModule { }
