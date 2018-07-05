import {Component, HostListener, OnInit} from '@angular/core';
import {isNumber} from 'util';
import {Portfolio} from "../../../shared/models/portfolio";
import {PortfolioService} from "../../../shared/service/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers:[PortfolioService]
})
export class PortfolioComponent implements OnInit {
  async: boolean=false;
  portfolios: Portfolio[]=[];
  startIndex: number = 0;
  currentIndex: number = 2;
  endIndex: number = 4;
  length :number;
  selectedPortfolio: Portfolio = new Portfolio();
  constructor(private _portfolioService: PortfolioService) {
    this._portfolioService.findAllAvailable().subscribe(next=>{
      this.portfolios=next;
      this.length=next.length;
      this.selectedPortfolio=next[2];
      console.log(this.selectedPortfolio);
    },error=>{
      console.log(error)
    }, ()=>{
      this.async=true;
    })
  }

  ngOnInit() {
  }

    mouseWheelUpFunc() {
      this.move('up')
  }
   mouseWheelDownFunc(){
     this.move('down')
  }

  move(i: any) {
    if (isNumber(i)) {
    this.currentIndex=i;
    this.selectedPortfolio=this.portfolios[this.currentIndex];
    this.startIndex = i - 2;
    this.endIndex = i + 2;
  }
    if (i == 'up') {
      if (this.currentIndex+1!=this.portfolios.length) {
        this.currentIndex += 1;
        this.selectedPortfolio=this.portfolios[this.currentIndex];
        this.startIndex = this.currentIndex -2 ;
        this.endIndex = this.currentIndex+2;
      }
    }
    if (i == 'down') {
      if (this.currentIndex-1>=0) {
        this.currentIndex -= 1;
        this.selectedPortfolio=this.portfolios[this.currentIndex];
        this.startIndex = this.currentIndex -2 ;
        this.endIndex = this.currentIndex+2;
      }
    }
  }
}
