import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  public login: string = localStorage.getItem('login') || '';
  public password: string = "";
  private token: string = "1ds1df15f1av7e84hfj4kx1zdhsv54cgf54scr4s";

  submit(form: NgForm) {
    this.login = form.value.login;
    localStorage.setItem('token', '1ds1df15f1av7e84hfj4kx1zdhsv54cgf54scr4s');
    localStorage.setItem('userLogin', this.login);
    this.router.navigate(['']);
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
    this.router.navigate(['/login']);
  }

}
