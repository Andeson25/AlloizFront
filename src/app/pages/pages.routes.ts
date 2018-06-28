import {PagesComponent} from "./pages/pages.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ServicesComponent} from './pages/services/services.component';

export const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent ,children: [
      {
        path:'', component: HomeComponent
      },
      {

        path:'portfolio', component: PortfolioComponent
      },
      {
        path:'about', component: AboutUsComponent
      },
      {
        path:'services', component: ServicesComponent
      }


    ]
  }
];
