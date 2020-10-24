import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-feature',
  templateUrl: './main-feature.component.html',
  styleUrls: ['./main-feature.component.css']
})
export class MainFeatureComponent implements OnInit {

  name = [
    "going places with triptime",
    "safe travellings" , 
    "guided tours"
  ];
  description = [
    "" , 
    "the trips are made safe by having all precautions taken.",
    "learn about the ethnicity of the place with an expert."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
