import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './fruits/create/create.component';
import { EditComponent } from './fruits/edit/edit.component';
import { HomeComponent } from './fruits/home/home.component';
import { ViewfruitComponent } from './fruits/viewfruit/viewfruit.component';

const routes: Routes = [
  {
    path: 'fruits/home',
    component: HomeComponent,
    // children:[
    //   {
    //     path: 'views',
    //     component: ViewfruitComponent
    //   ,
    // }]
  },
  {
    path: 'fruits/home/views',
    component: ViewfruitComponent
  },
  {
    path: 'fruits/create',
    component: CreateComponent
  },
  {
    path:'fruits/edit/:id',
    component: EditComponent
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
