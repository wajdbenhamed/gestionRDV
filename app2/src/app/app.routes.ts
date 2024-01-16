import { Routes } from '@angular/router';
import { ComparisonComponent } from './comparison/comparison.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { Component } from '@angular/core';
import { AffichageComponent } from './affichage/AffichageComponent';

export const routes: Routes = [
    {path:'',component:AffichageComponent},
    {path:'comparaison', component:ComparisonComponent}
];
