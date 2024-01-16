import { Component } from '@angular/core';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrl: './adult.component.css'
})
export class AdultComponent {
  nom!:string;
  age!:number;
messUser()
{
  if (this.age>18)
  alert("utilisateur "+this.nom+ " adulte age " + this.age)
else
alert("utilisateur " + this.nom+ "enfant de age " + this.age)
}
}
