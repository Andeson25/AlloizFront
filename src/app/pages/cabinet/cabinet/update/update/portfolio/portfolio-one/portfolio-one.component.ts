import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImagePipePipe} from '../../../../../../../shared/pipe/pipe/image-pipe.pipe';
import {Portfolio} from '../../../../../../../shared/models/portfolio';
import {PortfolioService} from '../../../../../../../shared/service/portfolio.service';

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css'],
  providers:[PortfolioService,ImagePipePipe]
})
export class PortfolioOneComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();
  img:string='';
  start:boolean=false;

  constructor(private _router: ActivatedRoute,private _portfolioService:PortfolioService,private _imagePipe: ImagePipePipe) {
    _router.params.subscribe(next=>{
      _portfolioService.findOne(next['id']).subscribe(next=>{
        this.portfolio=next;
        this.start=true;
        this.img=_imagePipe.transform(next.images);
      })
    })
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
  }
  update(form:HTMLFormElement){
    this._portfolioService.update(this.portfolio,form).subscribe(next=>{
      // console.log(this._imagePipe.transform(next.images));
      this.portfolio=next;;
      this.img=this._imagePipe.transform(next.images);
    },error=>{
      console.log(error);
    })

  }


}
