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

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23)
  };

  liv: string[] = ['Java', 'Angular2']; 

  filtro: string | undefined;
  constructor(){}

  ngOnInit(){

  }
}
