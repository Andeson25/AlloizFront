import {Routes} from '@angular/router';
import {CallbackComponent} from './callback.component';
import {CallbacksComponent} from './callbacks/callbacks.component';


export const callbackRoutes :Routes =[
  {
    path:'callback',component:CallbackComponent,children:[
      {
        path:'',component: CallbacksComponent
      }
    ]
  }
]
