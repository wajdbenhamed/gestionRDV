import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id:string = "";
  constructor(private route:ActivatedRoute)
  {
    this.id=this.route.snapshot.params["id"];
  }

}
