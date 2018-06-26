import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {routes} from "../../main.routes";


const _routes: Routes = [
  ...routes
];


@NgModule({
  imports: [
    RouterModule.forRoot(_routes, {useHash: true}),
  ],
  exports:[
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: []
})
export class GlobalImportsModule { }
