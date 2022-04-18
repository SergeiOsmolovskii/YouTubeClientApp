import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginControl!: FormControl;
  public passwordControl!: FormControl;


  constructor(public auth: AuthService) { }
  
  ngOnInit(): void {
    this.loginControl = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

}


