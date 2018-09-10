import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  organization = {
    id: 1,
    name: 'École de technologie supérieure',
    logo: 'ets.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
