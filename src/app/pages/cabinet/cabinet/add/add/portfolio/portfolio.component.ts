import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Portfolio} from '../../../../../../shared/models/portfolio';
import {PortfolioDescription} from '../../../../../../shared/models/portfolio-description';
import {PortfolioService} from '../../../../../../shared/service/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  portfolioForm: FormGroup;
  portfolio: Portfolio = new Portfolio();
  portfolioDescription: PortfolioDescription[] = [];

  img: string[] = [];

  appear: boolean = true;

  toggle() {
    this.appear = false;
  }

  constructor(private _portfolioService: PortfolioService) {
    this.portfolioDescription = new Array(3);
    this.portfolioDescription = [new PortfolioDescription(), new PortfolioDescription(), new PortfolioDescription()];
    this.portfolio.descriptions = this.portfolioDescription;
  }

  readUrl(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files && event.target.files[i]) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.img.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  ngOnInit() {
    this.portfolioForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required]),
        textareaRU: new FormControl('', [Validators.required]),
        textareaUK: new FormControl('', [Validators.required]),
        textareaEN: new FormControl('', [Validators.required])

      }
    );
    this.portfolioForm.valueChanges.subscribe(next => {
      this.portfolio = next;
      this.portfolio.descriptions = this.portfolioDescription;
    });
  }

  addDescr(text: string, index: number) {
    switch (index) {
      case 0: {
        this.portfolio.descriptions[index].language = 'EN';
        this.portfolio.descriptions[index].description = text;
        break;
      }
      case 1: {
        this.portfolio.descriptions[index].language = 'RU';
        this.portfolio.descriptions[index].description = text;
        break;
      }
      case 2: {
        this.portfolio.descriptions[index].language = 'UK';
        this.portfolio.descriptions[index].description = text;
        break;
      }
    }
  }

  addPortfolio(form: HTMLFormElement) {
    this._portfolioService.save(this.portfolio, form).subscribe(next => {
      console.log(next);
    }, error => {
      console.log(error);
    }, () => {
      this.portfolioForm.reset();
      this.img=[];
    });

  }


}
