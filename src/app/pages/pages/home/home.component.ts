import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../shared/models/technology";
import {TechnologiesSerivce} from "../../../shared/service/technologies.serivce";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TechnologiesSerivce]
})
export class HomeComponent implements OnInit {

  index: number = 2;
  technologies: Technology[] = [];
  selectedTechnology: Technology= new Technology();
  show=false;

  constructor( private  _servicesTechnology: TechnologiesSerivce ) {
  this._servicesTechnology.findAllAvailable().subscribe(next=>{
      this.technologies=next;
      this.selectedTechnology=next[2];
    },error=>{
      console.log(error)
    }, ()=>{
    this.show=true;
    })
  }

  ngOnInit() {
    console.log(this.technologies.length);
  }
  scroll(event){
    if (this.index>0 && this.index != this.technologies.length-1) {
      event ? this.index -= 1 : this.index += 1;
    } else if ( this.index == 0 && event == false) {
      this.index += 1;
    } else if ( this.index == this.technologies.length-1 && event==true){
      this.index -= 1;
    }
    this.selectedTechnology = this.technologies[this.index];
  }
}
