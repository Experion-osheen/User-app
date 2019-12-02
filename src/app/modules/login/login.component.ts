import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService, BroadcastService, AppConfigurationService } from '@service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  messages: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private broadcastService: BroadcastService,
    private appConfig: AppConfigurationService) { }

  ngOnInit() {
    this.messages = this.appConfig.messages;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let response = false;
    response = this.loginService.login(this.loginForm.value);
    if (response) {
      this.authService.onLogin();
      this.broadcastService.broadcastAlert('success', this.messages.loginSuccess);
      this.router.navigate(['/list']);
    } else {
      this.broadcastService.broadcastAlert('error', this.messages.loginError);

    }

  }

}
