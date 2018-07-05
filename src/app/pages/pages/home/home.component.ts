import {Component, OnInit} from '@angular/core';
import {Technology} from "../../../shared/models/technology";
import {TechnologyService} from "../../../shared/service/technology.service";
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TechnologyService],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ])
  ]
})

export class HomeComponent implements OnInit {
  index: number;
  technologies: Technology[] = [];
  selectedTechnology: Technology = new Technology();
  show = false;

  constructor(private  _servicesTechnology: TechnologyService) {
    this._servicesTechnology.findAllAvailable().subscribe(next => {
      this.technologies = next;
      this.index = Math.round(this.technologies.length / 2);
      this.selectedTechnology = next[this.index];
    }, error => {
      console.log(error)
    }, () => {
      this.show = true;
    })
  }

  ngOnInit() {
  }

  scroll(event) {
    if (this.index > 0 && this.index != this.technologies.length - 1) {
      event ? this.index -= 1 : this.index += 1;
    } else if (this.index == 0 && event == false) {
      this.index += 1
    } else if (this.index == this.technologies.length - 1 && event == true) {
      this.index -= 1
    } else if (this.index == this.technologies.length - 1 && event == false) {
      this.index = 0;
    } else if (this.index == 0 && event == true) {
      this.index = this.technologies.length - 1;
    }
    this.selectedTechnology = this.technologies[this.index];
  }
}
