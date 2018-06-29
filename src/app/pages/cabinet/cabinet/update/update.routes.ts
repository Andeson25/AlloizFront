import {UpdateComponent} from './update.component';
import {WorkerComponent} from './update/worker/worker.component';
import {Routes} from '@angular/router';
import {worker} from 'cluster';
import {WorkerOneComponent} from './update/worker/worker-one/worker-one.component';


export const updateRoutes :Routes =[
  {
    path:'update',component:UpdateComponent ,children :[
      {
        path:'worker',component:WorkerComponent
      },
      {
        path: 'worker/:id', component: WorkerOneComponent
      }
    ]
  }
]
