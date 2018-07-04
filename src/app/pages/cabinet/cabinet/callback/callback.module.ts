import { NgModule } from '@angular/core';

import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { CallbacksComponent } from './callbacks/callbacks.component';
import {CallbackComponent} from './callback.component';

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [CallbacksComponent,CallbackComponent]
})
export class CallbackModule { }
