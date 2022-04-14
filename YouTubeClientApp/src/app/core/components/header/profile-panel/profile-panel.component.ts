import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent {

  /* then fix to observable */
  
  constructor(public auth: AuthService) { }
  public authButton = 'Login';
  public userLogin: string = localStorage.getItem('userLogin') || 'Your name';

}
