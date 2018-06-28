import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Worker} from '../../../../../../shared/models/worker';
import {Incumbency} from '../../../../../../shared/models/incumbency';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioForm: FormGroup;
  worker: Worker = new Worker();
  incumbencies: Incumbency[] = [];

  img:string='';


  date= new Date().toISOString();

  constructor() {
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
        surname: new FormControl('', Validators.required)
      }
    );
    this.portfolioForm.valueChanges.subscribe(next => {
      this.worker = next;
      this.worker.incumbencies = this.incumbencies;
    });
  }
  addWorker(form:HTMLFontElement){
    console.log(this.worker)
  }

  addIncumbency() {
    this.incumbencies.push(new Incumbency());
    this.incumbencies[this.incumbencies.length - 1].name = '';
  }

  deleteIncumbency(i: number) {
    this.incumbencies.splice(i,1);
  }
}
