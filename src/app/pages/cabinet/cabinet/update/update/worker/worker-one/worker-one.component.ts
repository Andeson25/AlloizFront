import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkerService} from '../../../../../../../shared/service/worker.service';
import {Worker} from '../../../../../../../shared/models/worker';
import {ImagePipePipe} from '../../../../../../../shared/pipe/pipe/image-pipe.pipe';
import {Incumbency} from '../../../../../../../shared/models/incumbency';

@Component({
  selector: 'app-worker-one',
  templateUrl: './worker-one.component.html',
  styleUrls: ['./worker-one.component.css'],
  providers:[WorkerService,ImagePipePipe]
})
export class WorkerOneComponent implements OnInit {
  worker: Worker = new Worker();
  img:string='';
  constructor(private _router: ActivatedRoute,private _workerService:WorkerService,private _imagePipe: ImagePipePipe) {
    _router.params.subscribe(next=>{
      _workerService.findOne(next['id']).subscribe(next=>{
        this.worker=next;
        console.log(this.worker);
        this.img=_imagePipe.transform(next.image);
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

    this._workerService.update(this.worker,form).subscribe(next=>{
      this.worker=next;
      this.img=this._imagePipe.transform(next.image);
    },error=>{
      console.log(error);
    })
  }

  addIncumbency(){
    event.preventDefault();
    this.worker.incumbencies.push(new Incumbency());
  }
  deleteIncumbency(index){
    event.preventDefault();
    this.worker.incumbencies.splice(index, 1);
  }

}
