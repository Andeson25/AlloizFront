import {Routes} from '@angular/router';
import {addRoutes} from './cabinet/add/add.routes';
import {CabinetComponent} from './cabinet.component';
import {updateRoutes} from './cabinet/update/update.routes';
import {callbackRoutes} from './cabinet/callback/callback.routes';
import {AdminGuards} from "../../shared/guard/admin.guards";
import {AminChildrenGuards} from "../../shared/guard/amin.children.guards";

export const cabinetRoutes: Routes = [
  {
    path: 'cabinet',
    component: CabinetComponent,
    canActivate: [AdminGuards],
    canActivateChild: [AminChildrenGuards],
    children: [
      ...addRoutes,
      ...updateRoutes,
      ...callbackRoutes
    ]
  }
]
