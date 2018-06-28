import {PagesComponent} from "./pages/pages.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ContactsComponent} from './pages/contacts/contacts.component';

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
        path: 'contacts', component: ContactsComponent
      }
    ]
  }
];
