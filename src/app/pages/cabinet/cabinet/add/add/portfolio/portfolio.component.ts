import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Worker} from '../../../../../../shared/models/worker';
import {Incumbency} from '../../../../../../shared/models/incumbency';
import {Portfolio} from "../../../../../../shared/models/portfolio";
import {PortfolioDescription} from "../../../../../../shared/models/portfolio-description";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioForm: FormGroup;
  portfolio: Portfolio = new Portfolio();


  img:string='';


  date= new Date().toISOString();

  constructor() {
    this.portfolio.descriptions= new Array(3);
    this.portfolio.descriptions=[new PortfolioDescription(),new PortfolioDescription(),new PortfolioDescription()];

  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.img= event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  ngOnInit() {
    this.portfolioForm = new FormGroup({
        name: new FormControl('', Validators.required),
        link: new FormControl('', Validators.required)
      }
    );
    this.portfolioForm.valueChanges.subscribe(next => {
      this.portfolio = next;
    });
  }
  addWorker(form:HTMLFontElement){
    console.log(this.portfolio)
  }
  addLang(i,text){
  console.log(this.portfolio)
    if(i==0){
      this.portfolio.descriptions[i].language='en'
      this.portfolio.descriptions[i].description=text;
    }
    if(i==1){
      this.portfolio.descriptions[i].language='ru'
      this.portfolio.descriptions[i].description=text;
    }
    if(i==2){
      this.portfolio.descriptions[i].language='uk'
      this.portfolio.descriptions[i].description=text;
    }
  }

}
