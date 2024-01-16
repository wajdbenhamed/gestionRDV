import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // constructeur avec l'id venant de l'url ( parametre ) de active route
  id:string="";
  constructor(private route:ActivatedRoute) { // injection de dependance de ActivatedRouten dans le constructeur pour detecter les paramétres de l'url
    // recuperation de l'id
    this.id=this.route.snapshot.params["id"]; // recuperation de l'id de l'url
  }

}
