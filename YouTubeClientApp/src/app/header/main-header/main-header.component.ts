import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  
  public isSettingsVisible = false;
/*   constructor() { } */

  ngOnInit(): void {
    console.log('MainHeaderComponent');
  }

  toggleSortSettings() {
    if (this.isSettingsVisible === true) {
      this.isSettingsVisible = false;
    } else this.isSettingsVisible = true;
  }
}