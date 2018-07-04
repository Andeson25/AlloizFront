import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImagePipePipe} from '../../../../../../../shared/pipe/pipe/image-pipe.pipe';
import {Portfolio} from '../../../../../../../shared/models/portfolio';
import {PortfolioService} from '../../../../../../../shared/service/portfolio.service';
import {ImageService} from "../../../../../../../shared/service/image.service";

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html',
  styleUrls: ['./portfolio-one.component.css'],
  providers:[PortfolioService,ImagePipePipe,ImageService]
})
export class PortfolioOneComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();
  img:string='';
  start:boolean=false;

  constructor(private _imageService:ImageService ,private _router: ActivatedRoute,private _portfolioService:PortfolioService,private _imagePipe: ImagePipePipe) {
    _router.params.subscribe(next=>{
      _portfolioService.findOne(next['id']).subscribe(next=>{
        this.portfolio=next;
        console.log(this.portfolio);
        this.start=true;
        this.img=_imagePipe.transform(next.images[0].path);
      })
    })
  }

  ngOnInit() {
  }
  addImage(form:HTMLFormElement){
    this._imageService.save(form,this.portfolio.id).subscribe(next=>{
      this.portfolio.images.push(next);
    },error=>{
      console.log(error);
    },()=>{
      form.reset();
    })
  }
  delete(id){
    this._imageService.delete(id).subscribe(next=>{
        this.portfolio.images.splice(this.portfolio.images.indexOf(next),1);
      },error=>{
      console.log(error);
    })
  }
  // readUrl(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.img= event.target.result;
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }


  update(form:HTMLFormElement){
  console.log(this.portfolio)
    this._portfolioService.update(this.portfolio,form).subscribe(next=>{
      this.portfolio=next;
      this.img=this._imagePipe.transform(next.images);
    },error=>{
      console.log(error);
    })

    }


}
