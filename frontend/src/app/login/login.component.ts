import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../services/login/login.service";
import {Login} from "../Types/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authenticated: boolean;
  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder
  ) {
    this.loginForm = this.initForm();
    this.authenticated = false;
  }

  ngOnInit(): void {


  }

  initForm() {
   return this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
      rememberMe: this.fb.control(true),
    })
  }

  authenticate(credentials: Login) {
    return this.loginService.authenticate(credentials)
  }

  submit() {
    if (this.loginForm.valid && this.loginForm.touched) {
      this.loginService.login(this.loginForm.value);
    }
  }
}
