import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from 'src/app/shared/validators/password.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    public auth: AuthService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      loginControl: ['',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(8)
        ]
      ],
      passwordControl: ['',
        [
         Validators.required,
         Validators.minLength(8),
         validatePassword
        ]
      ],
    })
  }

  onSubmit() {
    this.auth.logIn(this.loginForm.controls['loginControl'].value, this.loginForm.controls['passwordControl'].value);
  }



}


