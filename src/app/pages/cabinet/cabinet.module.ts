import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';

import {GlobalImportsModule} from '../../shared/config/global-imports.module';
import {AddModule} from './cabinet/add/add.module';
import {UpdateModule} from './cabinet/update/update.module';

@NgModule({
  imports: [
    GlobalImportsModule,
    AddModule,
    UpdateModule
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }
