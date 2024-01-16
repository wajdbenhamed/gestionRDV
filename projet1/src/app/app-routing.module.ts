import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { HomeComponent } from './home/home.component';
import { AdultComponent } from './adult/adult.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"offre",component:OffreComponent},
  {path:"adult",component:AdultComponent},
  {path:"details/:id", component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
