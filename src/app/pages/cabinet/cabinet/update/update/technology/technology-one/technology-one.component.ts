import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../../../../../shared/models/technology";
import {TechnologyService} from "../../../../../../../shared/service/technology.service";
import {ImagePipePipe} from "../../../../../../../shared/pipe/pipe/image-pipe.pipe";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-technology-one',
  templateUrl: './technology-one.component.html',
  styleUrls: ['./technology-one.component.css'],
  providers: [TechnologyService, ImagePipePipe]
})
export class TechnologyOneComponent implements OnInit {
  technology: Technology= new Technology();
  img:string='';
  start:boolean=false;
  constructor(private _technologyService: TechnologyService, private _imagePipe: ImagePipePipe, private _router: ActivatedRoute) {
    _router.params.subscribe(next=>{
      _technologyService.findOne(next['id']).subscribe(next=>{
        this.technology=next;
        this.start=true;
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
        this.img= event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  update(form:HTMLFormElement){
    this._technologyService.update(this.technology,form).subscribe(next=>{
      console.log(next)
      this.technology=next;
      this.img=this._imagePipe.transform(next.image);
    },error=>{
      console.log(error);
    })

  }


}

