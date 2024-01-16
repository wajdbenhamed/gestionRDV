import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  
  {
    path:"home",component:HomeComponent
  },
  {
    path:"second", component:SecondComponent
  },
  // routage de detailComponent avec un parametre id
  {
    path:"detail/:id",component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
