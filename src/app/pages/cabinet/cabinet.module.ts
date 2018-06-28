import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';
import { PortfolioComponent } from './cabinet/add/add/portfolio/portfolio.component';
import {GlobalImportsModule} from '../../shared/config/global-imports.module';
import {AddModule} from './cabinet/add/add.module';

@NgModule({
  imports: [
    GlobalImportsModule,
    AddModule
  ],
  declarations: [CabinetComponent, PortfolioComponent]
})
export class CabinetModule { }
