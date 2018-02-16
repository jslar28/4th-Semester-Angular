import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  // Constructor Injection
  constructor(private fb: FormBuilder) {
    
  }

  onSubmitLogin(loginForm) {
    console.log(loginForm);
    //Send a request to the server
    // Try to login
    if (loginForm.valid) {
      console.log("Its valid")
      alert("Success!")
    } else {
      console.log("It's invalid")
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  ngOnInit() {
    this.createForm();
  }
}
