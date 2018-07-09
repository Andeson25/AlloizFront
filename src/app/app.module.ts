import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GlobalImportsModule} from './shared/config/global-imports.module';
import {PagesModule} from './pages/pages.module';
import {MenuService} from './source/menu-service';
import {CabinetModule} from './pages/cabinet/cabinet.module';
import {Interceptor} from './shared/config/interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginService} from './shared/service/login.service';
import {UserDetailsService} from './shared/service/user-details.service';


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
    MenuService,
    LoginService,
    UserDetailsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
