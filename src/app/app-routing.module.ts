import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';
import { ViewfruitComponent } from './fruits/viewfruit/viewfruit.component';

const routes: Routes = [
  {
    path: 'fruits/home',
    component: HomeComponent
  },
  {
    path: 'fruits/view',
    component: ViewfruitComponent
  },
  {
    path: '',
    redirectTo: 'fruits/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
