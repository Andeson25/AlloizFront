import {PagesComponent} from "./pages/pages.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from './pages/about-us/about-us.component';

export const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent ,children: [
      {
        path:'', component: HomeComponent
      },
      {
        path:'about', component: AboutUsComponent
      }

    ]
  }
];
