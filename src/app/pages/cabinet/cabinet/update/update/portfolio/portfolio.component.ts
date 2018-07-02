import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../../../../../shared/service/portfolio.service';
import {Portfolio} from '../../../../../../shared/models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[]=[];
  constructor(private _portfolioService:PortfolioService) {
    _portfolioService.findAll().subscribe(next=>{
        this.portfolio=next;
      }
    )
  }

  ngOnInit() {
  }

}
