import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { WorkerComponent } from './add/worker/worker.component';
import { PortfolioDescriptionComponent } from './add/portfolio-description/portfolio-description.component';


@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [AddComponent, WorkerComponent, PortfolioDescriptionComponent]
})
export class AddModule { }
