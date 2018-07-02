import {PagesComponent} from "./pages/pages.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ServicesComponent} from './pages/services/services.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {cabinetRoutes} from "./cabinet/cabinet.routes";

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
  },
  ...cabinetRoutes
];
