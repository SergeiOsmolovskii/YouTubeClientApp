import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
         Validators.minLength(8)
        ]
      ],
    })
  }

  onSubmit() {

  }



}


