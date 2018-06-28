import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index: number = 3;

  constructor() { }

  ngOnInit() {
  }
  scroll(event){
    if(this.index>=2) {
      event ? this.index -= 1 : this.index += 1;
    }else if( this.index==1 && event==false) {
      this.index += 1;
    }
  }

}
