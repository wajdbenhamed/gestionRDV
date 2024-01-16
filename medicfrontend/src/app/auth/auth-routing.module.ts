import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [{ path: '', component: AuthComponent,
children: [
  {path:'',component:SigninComponent},
  {path:'register',component:SignupComponent},
  {path:'**',component:NotfoundComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
