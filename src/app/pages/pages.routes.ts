import {PagesComponent} from "./pages/pages.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

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
      },
      {
        path: 'contacts', component: ContactsComponent
      }


    ]
  }
];
