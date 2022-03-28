import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPanelComponent } from './header/sort-panel/sort-panel.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { CardComponent } from './search-result/card/card.component';
import { VideoInfoComponent } from './search-result/video-info/video-info.component';
import { SearchResultContainerComponent } from './search-result/search-result-container/search-result-container.component';
import { ProfilePanelComponent } from './header/profile-panel/profile-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPanelComponent,
    MainHeaderComponent,
    CardComponent,
    VideoInfoComponent,
    SearchResultContainerComponent,
    ProfilePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
