import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';

import {GlobalImportsModule} from '../../shared/config/global-imports.module';
import {AddModule} from './cabinet/add/add.module';
import {UpdateModule} from './cabinet/update/update.module';
import { CallbackComponent } from './cabinet/callback/callback.component';
import {CallbackModule} from './cabinet/callback/callback.module';

@NgModule({
  imports: [
    GlobalImportsModule,
    AddModule,
    UpdateModule,
    CallbackModule
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }
