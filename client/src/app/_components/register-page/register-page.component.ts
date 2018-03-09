import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.createForm();
   }


 createForm() {
   this.form = this.formBuilder.group({
    email: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
    ])],
    username: ['', Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15),
    ])],
    password: ['', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(35),
    ])],
    confirm: ['', Validators.required]
    })
  }
  ngOnInit() {
  }

}
