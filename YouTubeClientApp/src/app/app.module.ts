import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPanelComponent } from './components/header/sort-panel/sort-panel.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { CardComponent } from './components/search-result/card/card.component';
import { VideoInfoComponent } from './components/search-result/video-info/video-info.component';
import { SearchResultContainerComponent } from './components/search-result/search-result-container/search-result-container.component';
import { ProfilePanelComponent } from './components/header/profile-panel/profile-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { BorderDependingOnTheDateDirective } from './directives/border-dependingonthedate.directive';
import { FilterSearchResultPipe } from './pipes/filter-search-result.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SortPanelComponent,
    MainHeaderComponent,
    CardComponent,
    VideoInfoComponent,
    SearchResultContainerComponent,
    ProfilePanelComponent,
    BorderDependingOnTheDateDirective,
    FilterSearchResultPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
