import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nom!:string; // variable de type string obligatoire
  prenom?:string; // variable de type string optionnelle
  age:number=33;
  
candidats=[{nom:"c1",prenom:"p1",age:17},{nom:"c2",prenom:"p2",age:20},{nom:"c3",prenom:"p3",age:35}]


  photo="https://avatars.githubusercontent.com/u/12435165?v=4";
  online:boolean=true;
  disponible:boolean=true;
  
  // variables globales
  constructor() { // constructeur qui se charge au moment de l'instanciation de la classe ( avant le chargement de la page )
this.nom="Khalil ";
this.prenom="Lakhdhar"
  }


}
