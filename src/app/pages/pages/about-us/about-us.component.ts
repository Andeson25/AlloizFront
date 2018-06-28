import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  OurTeam: any = [
    {
      name:"Nazar",
      age :19

    },
    {
      name:"Vitalik",
      age:20
    },
    {
      name:"Bogdan",
      age:23
    },
    {
      name: "Andriy",
      age: 19
    }
    ];


  ngOnInit() {
  }

}
