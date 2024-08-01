import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  valor = 5;

  deletarCiclo = false;

  mudouValor(){
    this.valor ++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}
