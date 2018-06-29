import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TechnologyDescription} from '../../../../../../shared/models/technology-description';
import {Technology} from '../../../../../../shared/models/technology';
import {TechnologiesSerivce} from '../../../../../../shared/service/technologies.serivce';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers:[TechnologiesSerivce]
})
export class TechnologyComponent implements OnInit {
  technologyForm: FormGroup;

  technology: Technology = new Technology();
  technologyDescription: TechnologyDescription[] = [];

  img:string='';




  constructor(private _techonolgyService:TechnologiesSerivce) {
    this.technologyDescription=new Array(3);
    this.technologyDescription=[new TechnologyDescription(),new TechnologyDescription(),new TechnologyDescription()];
    this.technology.descriptions=this.technologyDescription;
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
    this.technologyForm = new FormGroup({
        name: new FormControl('', [Validators.required])
      }
    );
    this.technologyForm.valueChanges.subscribe(next => {
      this.technology = next;
      this.technology.descriptions= this.technologyDescription;
    });
  }
  addDesc(text:string,index:number){
    switch (index){
      case 0:{
        this.technology.descriptions[index].language='EN';
        this.technology.descriptions[index].description=text;
        break;
      }
      case 1:{
        this.technology.descriptions[index].language='RU';
        this.technology.descriptions[index].description=text;
        break;
      }
      case 2:{
        this.technology.descriptions[index].language='RU';
        this.technology.descriptions[index].description=text;
        break;
      }
    }
  }

  addTech(form:HTMLFormElement){
    console.log(this.technology);
      this._techonolgyService.save(this.technology,form).subscribe(next=>{
          console.log(next);
      },error=>{
        console.log(error);
      })

  }


}
