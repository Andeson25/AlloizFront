import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {routes} from "../../main.routes";
import {PipeModule} from '../pipe/pipe.module';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';


const _routes: Routes = [
  ...routes
];
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '../../../assets/content', '.json');
}

@NgModule({
  imports: [
    RouterModule.forRoot(_routes, {useHash: true}),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http],
    }),
  ],
  exports:[
    TranslateModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipeModule
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GlobalImportsModule { }
