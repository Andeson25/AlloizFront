import {NgModule} from '@angular/core';
import {CabinetComponent} from './cabinet.component';

import {GlobalImportsModule} from '../../shared/config/global-imports.module';
import {AddModule} from './cabinet/add/add.module';
import {UpdateModule} from './cabinet/update/update.module';
import {CallbackModule} from './cabinet/callback/callback.module';
import {AdminGuards} from "../../shared/guard/admin.guards";
import {AdminChildrenGuards} from "../../shared/guard/admin-children-guards.service";

@NgModule({
  imports: [
    GlobalImportsModule,
    AddModule,
    UpdateModule,
    CallbackModule
  ],
  declarations: [CabinetComponent],
  providers: [AdminGuards, AdminChildrenGuards]
})
export class CabinetModule {
}
