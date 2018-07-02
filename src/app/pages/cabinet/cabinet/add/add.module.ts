import { NgModule } from '@angular/core';
import { AddComponent } from './add.component';
import {GlobalImportsModule} from '../../../../shared/config/global-imports.module';
import { WorkerComponent } from './add/worker/worker.component';
import {TechnologyComponent} from './add/technology/technology.component';
import { OrderTypeComponent } from './add/order-type/order-type.component';
import {PortfolioComponent} from './add/portfolio/portfolio.component';
import { CallBackTopicComponent } from './add/topic/call-back-topic.component';


@NgModule({
  imports: [
    GlobalImportsModule
  ],
  declarations: [AddComponent, WorkerComponent, TechnologyComponent, OrderTypeComponent, PortfolioComponent, CallBackTopicComponent]
})
export class AddModule { }
