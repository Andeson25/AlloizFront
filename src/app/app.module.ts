import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {GlobalImportsModule} from "./shared/config/global-imports.module";
import {PagesModule} from "./pages/pages.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GlobalImportsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
