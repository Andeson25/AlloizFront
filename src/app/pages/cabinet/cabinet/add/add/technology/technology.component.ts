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
  addTech(form:HTMLFontElement){

  }


}
