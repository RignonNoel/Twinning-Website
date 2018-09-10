import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { MyModalService } from '../../../services/my-modal/my-modal.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  errors: string[];

  years: number[] = [];
  hasSubmit = false;

  validatedTerms = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private myModalService: MyModalService) {
    this.registerForm = this.formBuilder.group(
      {
        email: [null, Validators.required],
        first_name: [null, Validators.required],
        last_name: [null, Validators.required],
        password: [null, Validators.required],
        confirmation: [null, Validators.required],
      },
      {validator: [
        this.confirmationValidator()
      ]}
    );
  }

  confirmationValidator() {
    return (group: FormGroup) => {

      const password = group.controls['password'];
      const confirmation = group.controls['confirmation'];

      if (password.value !== confirmation.value) {
        return confirmation.setErrors({
          apiError: ['La confirmation n\'est pas identique au mot de passe.']
        });
      }
    };
  }

  ngOnInit() {
    const actualYear = new Date().getFullYear();
    const minYear = actualYear - 120;
    const maxYear = actualYear - 13;

    for (let i = maxYear; i > minYear; i--) {
      this.years.push(i);
    }
  }

  submit() {
    if (this.validatedTerms === true) {
      this.register();
    } else {
      this.toogleModal();
    }
  }

  toogleModal() {
    const name = 'form_terms';
    const modal = this.myModalService.get(name);

    if (!modal) {
      console.error('No modal named %s', name);
      return;
    }

    modal.title = 'Conditions d\'utilisations';
    modal.button2Label = 'J\'accepte les conditions';
    modal.toggle();
  }

  acceptTerms() {
    this.validatedTerms = true;
    this.toogleModal();
    this.submit();
  }

  register() {
    this.hasSubmit = true;
    if ( this.registerForm.valid ) {
      this.userService.create(this.registerForm.value, this.registerForm.value['password']).subscribe(
        data => {
          this.router.navigate(['/register/confirmation']);
        },
        err => {
          console.log(err.error);
          if (err.error.non_field_errors) {
            this.errors = err.error.non_field_errors;
            console.log(this.errors);
          }
          if (err.error.first_name) {
            this.registerForm.controls['first_name'].setErrors({
              apiError: err.error.first_name
            });
          }
          if (err.error.last_name) {
            this.registerForm.controls['last_name'].setErrors({
              apiError: err.error.last_name
            });
          }
          if (err.error.email) {
            this.registerForm.controls['email'].setErrors({
              apiError: err.error.email
            });
          }
          if (err.error.university && err.error.university.name) {
            this.registerForm.controls['university'].setErrors({
              apiError: err.error.university.name
            });
          }
          if (err.error.academic_level) {
            if (err.error.academic_level.name) {
              this.registerForm.controls['academic_level'].setErrors({
                apiError: err.error.academic_level.name
              });
            } else {
              this.registerForm.controls['academic_level'].setErrors({
                apiError: err.error.academic_level
              });
            }
          }
          if (err.error.academic_field) {
            if (err.error.academic_field.name) {
              this.registerForm.controls['academic_field'].setErrors({
                apiError: err.error.academic_field.name
              });
            } else {
              this.registerForm.controls['academic_field'].setErrors({
                apiError: err.error.academic_field
              });
            }
          }
          if (err.error.password) {
            this.registerForm.controls['password'].setErrors({
              apiError: err.error.password
            });
          }
        }
      );
    }
  }
}
