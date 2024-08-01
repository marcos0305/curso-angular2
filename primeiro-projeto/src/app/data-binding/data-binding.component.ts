import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'

})

export class DataBindingComponent {
  url: string = 'http://loiane.com';

  urlImagem: any = 'https://images.app.goo.gl/C2ohYHVsGk9VMWLS6';

  cursoAngular: boolean = true;

  valorAtual: string ='';
  valorSalvo ='';
  
  isMouseOver: boolean = false;

  nome = 'abc';

  nomeDoCurso: string = 'Angular';
  
  pessoa: any ={
    nome:'jef',
    idade: 25
  }

  getGosteiCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  getValor(){
    return  1;
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=((<HTMLInputElement>evento.target).value);
  }
  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  valorInicial = 15;

  onMudouvalor(evento: any){
    console.log(evento.novoValor);
  }
}
