import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-affichage',
  standalone: true,
  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.css',
  imports: [FormsModule]
})
export class AffichageComponent {
  nom!: string ;
  prenom!: string ;
 
}
