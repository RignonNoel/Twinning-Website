import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-default-layout',
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
  styleUrls: ['default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
