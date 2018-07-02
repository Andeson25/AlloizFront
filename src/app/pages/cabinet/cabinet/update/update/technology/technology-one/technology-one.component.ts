import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../../../../../shared/models/technology";
import {TechnologiesSerivce} from "../../../../../../../shared/service/technologies.serivce";
import {ImagePipePipe} from "../../../../../../../shared/pipe/pipe/image-pipe.pipe";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-technology-one',
  templateUrl: './technology-one.component.html',
  styleUrls: ['./technology-one.component.css'],
  providers: [TechnologiesSerivce, ImagePipePipe]
})
export class TechnologyOneComponent implements OnInit {
  technology: Technology= new Technology();
  img:string='';

  constructor(private _technologyService: TechnologiesSerivce, private _imagePipe: ImagePipePipe, private _router: ActivatedRoute) {
    _router.params.subscribe(next=>{
      _technologyService.findOne(next['id']).subscribe(next=>{
        this.technology=next;
        console.log(next);
        this.img=_imagePipe.transform(next.image);
      }, error=> console.log(error)
        )
    })
  }

  ngOnInit() {
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.img = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  update(form:HTMLFormElement){
    console.log(this.technology)
    this._technologyService.update(this.technology,form).subscribe(next=>{
      this.technology=next;
      this.img=this._imagePipe.transform(next.image);
    },error=>{
      console.log(error);
    })

  }


}

