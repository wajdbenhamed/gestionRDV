import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'} ,
 {path:'home',component:HomeComponent},
 {path:'second',component:SecondComponent} 
];
