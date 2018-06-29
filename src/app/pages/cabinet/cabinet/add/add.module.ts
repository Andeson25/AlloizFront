import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { WorkerComponent } from './add/worker/worker.component';
import {TechnologyComponent} from './add/technology/technology.component';


@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [AddComponent, WorkerComponent, TechnologyComponent]
})
export class AddModule { }
