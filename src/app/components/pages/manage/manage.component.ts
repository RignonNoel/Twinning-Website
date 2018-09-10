import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../../services/organization.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Organization} from '../../../models/organization';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  step: number = null;

  organizationId: number;
  organization = null;

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

  organizationForm: FormGroup;
  errors: string = null;

  constructor(private organizationService: OrganizationService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.organizationId = params['id'];
      this.refreshOrganization();
    });
    this.selectedQuestion = this.questions[0].id;
  }

  resetForm() {
    this.organizationForm = this.formBuilder.group(
      {
        name: [null, Validators.required],
        description: [null, Validators.required],
        godson_value: [null, Validators.required],
        godfather_value: [null, Validators.required],
      }
    );
    if (this.organization) {
      this.organizationForm.controls['name'].setValue(this.organization.name);
      this.organizationForm.controls['description'].setValue(this.organization.description);
      this.organizationForm.controls['godson_value'].setValue(this.organization.godson_value);
      this.organizationForm.controls['godfather_value'].setValue(this.organization.godfather_value);
    }
  }

  refreshOrganization() {
    this.organizationService.get(this.organizationId).subscribe(
      data => {
        this.organization = new Organization(data);
        this.resetForm();
      }
    );
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
