import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Emploi } from '../shared/emploi';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css',
  
})
export class OffreComponent {
offres : Emploi[]=[];
offre :Emploi = new Emploi();
addoffre(){
  this.offres.push(this.offre);
  this.offre=new Emploi();
}

}
