import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchResultContainerComponent } from './components/search-result-container/search-result-container.component';
import { FilterSearchResultPipe } from './pipes/filter/filter-search-result.pipe';
import { VideoInfoConvertPipe } from './pipes/convert/video-info-convert.pipe';
import { VideoInfoComponent } from './components/video-info/video-info.component';
import { BorderDependingOnTheDateDirective } from './directives/border-depending-on-the-date.directive';


@NgModule({
  declarations: [
    CardComponent,
    SearchResultContainerComponent,
    VideoInfoComponent,
    FilterSearchResultPipe,
    VideoInfoConvertPipe,
    BorderDependingOnTheDateDirective
  ],
  imports: [CommonModule],
  exports: [SearchResultContainerComponent],
})
export class YoutubeModule {}
