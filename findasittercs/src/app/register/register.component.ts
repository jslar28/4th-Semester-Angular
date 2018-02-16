import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  onSubmitRegister(registerForm) {
    console.log(registerForm);
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      region: ['', Validators.required],
      picture: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.createForm();
  }

}
