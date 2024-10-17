import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-exemplos-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {

 

  valor = 'texto em maiuscula' ;
}
