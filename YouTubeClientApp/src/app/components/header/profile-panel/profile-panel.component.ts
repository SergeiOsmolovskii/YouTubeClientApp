import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {

/*   constructor() { } */

  public name: string = 'Your name';

  ngOnInit(): void {
    console.log('ProfilePanelComponent');
  }

}
