import { NgModule } from '@angular/core';

import { UpdateComponent } from './update.component';
import {WorkerComponent} from './update/worker/worker.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import {WorkerOneComponent} from './update/worker/worker-one/worker-one.component';
import { PortfolioComponent } from './update/portfolio/portfolio.component';
import { TechnologyComponent } from './update/technology/technology.component';
import { IncumbencyComponent } from './update/incumbency/incumbency.component';
import { CallbackTypeComponent } from './update/callback-type/callback-type.component';
import { OrderTypeComponent } from './update/order-type/order-type.component';
import { IncumbencyOneComponent } from './update/incumbency/incumbency-one/incumbency-one.component';
import { TechnologyOneComponent } from './update/technology/technology-one/technology-one.component';
import { PortfolioOneComponent } from './update/portfolio/portfolio-one/portfolio-one.component';
import { OrderTypeOneComponent } from './update/order-type/order-type-one/order-type-one.component';

@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [TechnologyOneComponent, UpdateComponent,WorkerComponent, WorkerOneComponent, PortfolioComponent, TechnologyComponent, IncumbencyComponent, CallbackTypeComponent, OrderTypeComponent, IncumbencyOneComponent, OrderTypeOneComponent,PortfolioOneComponent]
})
export class UpdateModule { }
