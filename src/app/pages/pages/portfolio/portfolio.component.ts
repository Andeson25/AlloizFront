import {Component, HostListener, OnInit} from '@angular/core';

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

  move(i: number) {
    this.currentIndex=i;
    this.startIndex = i - 2;
    this.endIndex = i + 2;
  }
}
