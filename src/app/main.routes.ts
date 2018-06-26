import {AppComponent} from "./app.component";
import {Routes} from "@angular/router";
import {pagesRoutes} from "./pages/pages.routes";

export const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      ...pagesRoutes
    ]
  }
];
