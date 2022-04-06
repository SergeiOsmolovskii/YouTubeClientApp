import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { SearchResultContainerComponent } from './youtube/components/search-result-container/search-result-container.component';
import { DetailedVideoInfoComponent } from './youtube/pages/detailed-video-info/detailed-video-info.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'search', component: SearchResultContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'search/video/:id', component: DetailedVideoInfoComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
