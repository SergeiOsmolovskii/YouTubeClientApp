import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainPageComponent 
  },
  { 
    path: 'admin', 
    component: AdminPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
