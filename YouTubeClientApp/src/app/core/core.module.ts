import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { ProfilePanelComponent } from './header/profile-panel/profile-panel.component';
import { SortPanelComponent } from './header/sort-panel/sort-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainHeaderComponent,
    ProfilePanelComponent,
    SortPanelComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainHeaderComponent],
})
export class CoreModule {}
