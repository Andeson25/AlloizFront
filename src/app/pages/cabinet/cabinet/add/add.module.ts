import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { WorkerComponent } from './add/worker/worker.component';
import {TechnologyComponent} from './add/technology/technology.component';
import { OrderTypeComponent } from './add/order-type/order-type.component';
import {PortfolioComponent} from './add/portfolio/portfolio.component';


@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [AddComponent, WorkerComponent, TechnologyComponent, OrderTypeComponent, PortfolioComponent]
})
export class AddModule { }
