import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { WorkerComponent } from './add/worker/worker.component';


@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [AddComponent, WorkerComponent]
})
export class AddModule { }
