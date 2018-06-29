import {Routes} from '@angular/router';
import {CabinetComponent} from '../../cabinet.component';
import {PortfolioComponent} from './add/portfolio/portfolio.component';
import {PortfolioDescriptionComponent} from "./add/portfolio-description/portfolio-description.component";

export const addRoutes :Routes =[
  {
    path:'add',component:CabinetComponent ,children :[
      {
        path:'portfolio',component:PortfolioComponent
      },
      {
        path:'portfolio-description',component:PortfolioDescriptionComponent
      }
    ]
  }
]
