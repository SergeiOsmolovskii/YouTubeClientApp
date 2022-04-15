import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})

export class ProfilePanelComponent implements OnInit{
  public isLogged!: boolean | null;
  public userLogin!: string;

  ngOnInit(): void {
    const userLogin = localStorage.getItem('userLogin');

    if (userLogin) {
      this.auth.setUserLogin(userLogin);
      this.auth.isLogIn(true); 
    }

    this.auth.isLogged$.subscribe(data => this.isLogged = data);
    this.auth.user$.subscribe(data => this.userLogin = data.login);
  }

  constructor(public auth: AuthService) { }

  logout() { 
    this.auth.logOut();
  }
}