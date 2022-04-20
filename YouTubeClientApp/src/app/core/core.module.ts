import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { SortPanelComponent } from './components/header/sort-panel/sort-panel.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { CoreRoutingModule } from './core-routing.module';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
@NgModule({
  declarations: [
    MainHeaderComponent,
    ProfilePanelComponent,
    SortPanelComponent,
    MainPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    YoutubeModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MainHeaderComponent, MainPageComponent],
})
export class CoreModule {}
