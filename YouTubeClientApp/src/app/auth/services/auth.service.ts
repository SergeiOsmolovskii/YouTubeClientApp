import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged$!: Observable<boolean | null>;
  private isLogged$$ = new BehaviorSubject(false);

  public user$!: Observable<Auth>;
  private user$$ = new BehaviorSubject({ login: '', password: '' });

  constructor(private router: Router) {
    this.isLogged$ = this.isLogged$$.asObservable();
    this.user$ = this.user$$.asObservable();
  }
  
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
