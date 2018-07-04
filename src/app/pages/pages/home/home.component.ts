import {Component, OnInit} from '@angular/core';
import {Technology} from "../../../shared/models/technology";
import {TechnologyService} from "../../../shared/service/technology.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TechnologyService]
})
export class HomeComponent implements OnInit {

  index: number = 2;
  technologies: Technology[] = [];
  selectedTechnology: Technology = new Technology();
  show = false;

  constructor(private  _servicesTechnology: TechnologyService) {
    this._servicesTechnology.findAllAvailable().subscribe(next => {
      this.technologies = next;
      this.selectedTechnology = next[2];
    }, error => {
      console.log(error)
    }, () => {
      this.show = true;
      console.log(this.technologies);
    })
  }

  ngOnInit() {
    console.log(this.technologies.length);
  }

  scroll(event, image: HTMLDivElement) {
    if (this.index > 0 && this.index != this.technologies.length - 1) {
      image.style.animation = "fadeOut .2s";
      setTimeout(
        ()=>{image.style.animation = "fadeIn .2s";
          event ? this.index -= 1 : this.index += 1;},200)
    } else if (this.index == 0 && event == false) {
      image.style.animation = "fadeOut .2s";
      setTimeout(() => {
        this.index += 1
      }, 200)
      image.style.animation = "fadeIn .2s";
    } else if (this.index == this.technologies.length - 1 && event == true) {
      image.style.animation = "fadeOut .2s";
      setTimeout(this.index -= 1, 200)
    } else if (this.index == this.technologies.length - 1 && event == false) {
      this.index = 0;
    } else if (this.index == 0 && event == true) {
      this.index = this.technologies.length - 1;
    }
    this.selectedTechnology = this.technologies[this.index];
  }
}
