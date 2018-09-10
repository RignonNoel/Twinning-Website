import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations = [
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    },
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    },
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    },
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    },
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    },
    {
      id: 1,
      name: 'École de technologie supérieure',
      logo: 'ets.png'
    },
    {
      id: 2,
      name: 'Thesez-vous',
      logo: 'tv.svg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  visitOrganization(id: number) {
    this.router.navigate(['/organization/' + id]);
  }
}
