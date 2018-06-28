import {Component, HostListener, OnInit} from '@angular/core';
import {isNumber} from 'util';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: string[] = ['kek1', 'kek2', 'kek3', 'kek4', 'kek5', 'kek6', 'kek7', 'kek8'];
  startIndex: number = 0;
  currentIndex: number = 2;
  endIndex: number = 4;
  length = this.items.length;
  constructor() { }

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
    this.startIndex = i - 2;
    this.endIndex = i + 2;
  }
    if (i == 'up') {
      if (this.currentIndex+1!=this.items.length) {
        this.currentIndex += 1;
        this.startIndex = this.currentIndex -2 ;
        this.endIndex = this.currentIndex+2;
      }
    }
    if (i == 'down') {
      if (this.currentIndex-1>=0) {
        this.currentIndex -= 1;
        this.startIndex = this.currentIndex -2 ;
        this.endIndex = this.currentIndex+2;
      }
    }
  }
}
