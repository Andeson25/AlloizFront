import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import {WorkerComponent} from './update/worker/worker.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import {WorkerOneComponent} from './update/worker/worker-one/worker-one.component';

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [UpdateComponent,WorkerComponent, WorkerOneComponent]
})
export class UpdateModule { }
