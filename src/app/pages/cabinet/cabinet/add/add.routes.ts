import {Routes} from '@angular/router';
import {CabinetComponent} from '../../cabinet.component';
import {PortfolioComponent} from './add/portfolio/portfolio.component';
import {TechnologyComponent} from './add/technology/technology.component';

export const addRoutes :Routes =[
  {
    path:'add',component:CabinetComponent ,children :[
      {
        path:'portfolio',component:PortfolioComponent
      },
      {
        path:'technology', component: TechnologyComponent
      }
    ]
  }
]
