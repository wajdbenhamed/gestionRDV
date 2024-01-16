import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparisonComponent } from '../../../app2/src/app/comparison/comparison.component';
import { AffichageComponent } from '../../../app2/src/app/affichage/affichage.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparisonComponent,
    AffichageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
