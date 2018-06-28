import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GlobalImportsModule} from "./shared/config/global-imports.module";
import {PagesModule} from "./pages/pages.module";
import {MenuService} from './source/menu-service';
import {CabinetModule} from './pages/cabinet/cabinet.module';
import {PipeModule} from './shared/pipe/pipe.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GlobalImportsModule,
    PagesModule,
    CabinetModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
