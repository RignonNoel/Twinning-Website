import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-layout',
  template: `
    <div class="container">
      <div class="container__header">
        <app-header></app-header>
      </div>
      <div class="container__content">
        <router-outlet></router-outlet>
      </div>
      <div class="container__footer">
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['background-layout.component.scss']
})
export class BackgroundLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
