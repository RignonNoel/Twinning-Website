import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  step: number = null;

  constructor() { }

  ngOnInit() {
  }

  changeStep(index: number) {
    this.step = index;
  }

}
