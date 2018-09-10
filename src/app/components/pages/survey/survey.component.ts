import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  organization = {
    id: 1,
    name: 'École de technologie supérieure',
    logo: 'ets.png'
  };

  questions = [
    {
      id: 1,
      titleGodson: 'Quel niveau d\'etude allez vous commencer ?',
      titleGodfather: 'A quel niveau d\'etude etes-vous ?',
      answers: [
        {
          id: 1,
          title: 'Baccalaureat'
        },
        {
          id: 2,
          title: 'Maitrise'
        },
        {
          id: 3,
          title: 'Doctorat'
        }
      ]
    },
    {
      id: 2,
      titleGodson: 'Lorem ipsum son',
      titleGodfather: 'Lorem ipsum father',
      answers: [
        {
          id: 1,
          title: 'A'
        },
        {
          id: 2,
          title: 'B'
        }
      ]
    },
    {
      id: 1,
      titleGodson: 'Quel niveau d\'etude allez vous commencer ?',
      titleGodfather: 'A quel niveau d\'etude etes-vous ?',
      answers: [
        {
          id: 1,
          title: 'Baccalaureat'
        },
        {
          id: 2,
          title: 'Maitrise'
        },
        {
          id: 3,
          title: 'Doctorat'
        }
      ]
    },
    {
      id: 2,
      titleGodson: 'Lorem ipsum son',
      titleGodfather: 'Lorem ipsum father',
      answers: [
        {
          id: 1,
          title: 'A'
        },
        {
          id: 2,
          title: 'B'
        }
      ]
    },
    {
      id: 1,
      titleGodson: 'Quel niveau d\'etude allez vous commencer ?',
      titleGodfather: 'A quel niveau d\'etude etes-vous ?',
      answers: [
        {
          id: 1,
          title: 'Baccalaureat'
        },
        {
          id: 2,
          title: 'Maitrise'
        },
        {
          id: 3,
          title: 'Doctorat'
        }
      ]
    },
    {
      id: 2,
      titleGodson: 'Lorem ipsum son',
      titleGodfather: 'Lorem ipsum father',
      answers: [
        {
          id: 1,
          title: 'A'
        },
        {
          id: 2,
          title: 'B'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
