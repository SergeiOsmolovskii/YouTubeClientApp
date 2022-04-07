import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultContainerComponent } from './components/search-result-container/search-result-container.component';
import { DetailedVideoInfoComponent } from './pages/detailed-video-info/detailed-video-info.component';

const routes: Routes = [
  { path: '', 
    component: SearchResultContainerComponent 
  },
  { 
    path: 'video/:id', 
    component: DetailedVideoInfoComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
