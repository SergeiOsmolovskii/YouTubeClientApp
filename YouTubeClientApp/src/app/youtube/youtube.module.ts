import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchResultContainerComponent } from './components/search-result-container/search-result-container.component';
import { FilterSearchResultPipe } from './pipes/filter/filter-search-result.pipe';
import { VideoInfoConvertPipe } from './pipes/convert/video-info-convert.pipe';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { BorderDependingOnTheDateDirective } from './directives/border-depending-on-the-date.directive';
import { PageNotFoundComponent } from '../core/pages/page-not-found/page-not-found.component';
import { DetailedVideoInfoComponent } from './pages/detailed-video-info/detailed-video-info.component';
import { YoutubeRoutingModule } from './youtube-routing.module';


@NgModule({
  declarations: [
    CardComponent,
    SearchResultContainerComponent,
    VideoInfoComponent,
    FilterSearchResultPipe,
    VideoInfoConvertPipe,
    BorderDependingOnTheDateDirective,
    PageNotFoundComponent,
    DetailedVideoInfoComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ],
  exports: [
    SearchResultContainerComponent,
    PageNotFoundComponent
  ],
})
export class YoutubeModule {}
