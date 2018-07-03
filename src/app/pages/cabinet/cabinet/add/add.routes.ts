import {Routes} from '@angular/router';
import {PortfolioComponent} from './add/portfolio/portfolio.component';
import {TechnologyComponent} from './add/technology/technology.component';
import {OrderTypeComponent} from './add/order-type/order-type.component';
import {WorkerComponent} from "./add/worker/worker.component";
import {AddComponent} from "./add.component";
import {CallBackTopicComponent} from "./add/topic/call-back-topic.component";


export const addRoutes :Routes =[
  {
    path:'add',component:AddComponent ,children :[
      {
        path:'portfolio',component:PortfolioComponent
      },
      {
        path:'technology', component: TechnologyComponent
      },
      {
        path:'order-type', component: OrderTypeComponent
      },
      {
        path:'worker', component: WorkerComponent
      },
      {
        path:'callback-topic', component: CallBackTopicComponent
      }
    ]
  }
]
