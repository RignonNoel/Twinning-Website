import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  step: number = null;

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
    }
  ];

  selectedQuestion: number;

  constructor() { }

  ngOnInit() {
    this.selectedQuestion = this.questions[0].id;
  }

  changeStep(index: number) {
    this.step = index;
  }

  addNewQuestion() {
    this.questions.push(
      {
        id: this.questions.length + 1,
        titleGodson: '',
        titleGodfather: '',
        answers: [
          {
            id: 1,
            title: ''
          },
          {
            id: 2,
            title: ''
          }
        ]
      },
    );
  }

  addNewAnswer(questionId: number) {
    for (const question of this.questions) {
      if (question.id === questionId) {
        question.answers.push(
          {
            id: question.answers.length + 1,
            title: ''
          }
        );
      }
    }
  }

  changeSelectedQuestion(questionId: number) {
    this.selectedQuestion = questionId;
  }

  getSelectedQuestion() {
    for (const question of this.questions) {
      if (question.id === this.selectedQuestion) {
        return question;
      }
    }
  }
}
