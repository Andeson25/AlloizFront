import {Routes} from '@angular/router';
import {addRoutes} from './cabinet/add/add.routes';
import {CabinetComponent} from './cabinet.component';

export const cabinetRoutes :Routes =[
  {
    path:'cabinet',component:CabinetComponent ,children :[
      ...addRoutes
    ]
  }
]
