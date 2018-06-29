import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Worker} from "../../../../../../shared/models/worker";
import {WorkerService} from "../../../../../../shared/service/worker.service";
import {Incumbency} from "../../../../../../shared/models/incumbency";
import {worker} from "cluster";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
  providers: [WorkerService]
})
export class WorkerComponent implements OnInit {
  workerForm: FormGroup;
  worker: Worker = new Worker();

  img:string='';

  constructor(private _workerService: WorkerService) {
    this.worker.incumbencies = [];
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

  ngOnInit(){
    this.workerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required])
      }
    );
    this.workerForm.valueChanges.subscribe(next => {
      let arr=this.worker.incumbencies;
      this.worker = next;
      this.worker.incumbencies=arr;
    });
  }

  addWorker(form:HTMLFormElement) {
    console.log(this.worker);
    if(this.workerForm.valid){
    this._workerService.save(this.worker, form).subscribe(next => {
      console.log(next);
    }, error => {
      console.log(error);
    },()=>{
      this.workerForm.reset();
      this.worker=new Worker();
      this.worker.incumbencies = [];
    })
    }
  }

  newIncombency(data, i){
     this.worker.incumbencies[i].name=data;
  }
  addIncumbency(){
    event.preventDefault();
    this.worker.incumbencies.push(new Incumbency());
  }
  deleteIncumbency(index){
    this.worker.incumbencies.splice(index, 1);
  }
  }
