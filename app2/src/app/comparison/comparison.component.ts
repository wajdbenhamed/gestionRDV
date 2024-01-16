import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.css',
  imports: [FormsModule]
})
export class ComparisonComponent {
a!:number;
b!: number;
compar:string="";
comparer()
{
  if (this.a<this.b)
 alert( 'a ${this.a}  inferieur b  ${this.b}');
else
alert( this.b + "inferieur a "+ this.a);
}
pgcd()
{
  while (this.a!=this.b )
  {
    if (this.a >this.b)
this.a=this.a-this.b
else 
this.b=this.b-this.a
  }
  alert(this.b)
  
}

}
