import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.css'
})
export class DiretivaNgstyleComponent {
tamanhoFonte: number = 10;
ativo: boolean = false;

mudarAtivo(){
  this.ativo = !this.ativo;
}
}
