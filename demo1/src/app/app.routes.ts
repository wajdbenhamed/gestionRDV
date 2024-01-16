import { Routes } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import { AproposComponent } from './apropos/apropos.component';

export const routes: Routes = [
    {path:'', redirectTo:'welcom', pathMatch:'full'},
    {path:'welcom',component:WelcomComponent},
    {path: 'apropos', component:AproposComponent}

];
