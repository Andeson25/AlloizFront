import {UpdateComponent} from './update.component';
import {WorkerComponent} from './update/worker/worker.component';
import {Routes} from '@angular/router';
import {WorkerOneComponent} from './update/worker/worker-one/worker-one.component';
import {IncumbencyComponent} from './update/incumbency/incumbency.component';
import {PortfolioComponent} from './update/portfolio/portfolio.component';
import {PortfolioOneComponent} from './update/portfolio/portfolio-one/portfolio-one.component';
import {OrderTypeComponent} from './update/order-type/order-type.component';



export const updateRoutes :Routes =[
  {
    path:'update',component:UpdateComponent ,children :[
      {
        path:'worker',component:WorkerComponent
      },
      {
        path: 'worker/:id', component: WorkerOneComponent
      },
      {
        path: 'incumbency', component: IncumbencyComponent
      },
      {
        path:'portfolio',component: PortfolioComponent
      },
      {
        path:'portfolio/:id',component: PortfolioOneComponent
      },
      {
        path: 'order-type', component: OrderTypeComponent
      }
    ]
  }
]
