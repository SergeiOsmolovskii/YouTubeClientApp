import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private token!: string;
  public login: string = localStorage.getItem('login') || '';
  public password: string = '';

  public isLogged$!: Observable<boolean | null>;
  private isLogged$$ = new BehaviorSubject(false);

  public user$!: Observable<Auth>;
  private user$$ = new BehaviorSubject({ login: 'User Name', password: '' });

  constructor(private router: Router) {
    this.isLogged$ = this.isLogged$$.asObservable();
    this.user$ = this.user$$.asObservable();
  }
  


  generateToken(): void {
    this.token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
  }

  logIn(form: NgForm) {
    this.generateToken();
    this.user$$.next({ login: form.value.login, password: form.value.password });
    this.isLogged$$.next(true);
    localStorage.setItem('userLogin', this.user$$.value.login);
    localStorage.setItem('token', this.token);
    this.router.navigate(['']);
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
    this.user$$.next({ login: 'User Name', password: '' });
    this.isLogged$$.next(false);
    this.router.navigate(['/login']);
  }

  setUserLogin(login: string): void {
    this.user$$.next({ login: login, password: '' });
  }

  isLogIn(value: boolean): void {
    this.isLogged$$.next(value);
  }

}
