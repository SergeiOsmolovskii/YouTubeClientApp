import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPanelComponent } from './header/sort-panel/sort-panel.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPanelComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
