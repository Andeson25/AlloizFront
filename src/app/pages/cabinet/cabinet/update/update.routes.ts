import {UpdateComponent} from './update.component';
import {WorkerComponent} from './update/worker/worker.component';
import {Routes} from '@angular/router';
import {WorkerOneComponent} from './update/worker/worker-one/worker-one.component';
import {IncumbencyComponent} from './update/incumbency/incumbency.component';
import {TechnologyOneComponent} from "./update/technology/technology-one/technology-one.component";
import {TechnologyComponent} from "./update/technology/technology.component";


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
        path: 'tecnology', component: TechnologyComponent
      },
      {
        path: 'tecnology/:id', component: TechnologyOneComponent
      }

    ]
  }
]
