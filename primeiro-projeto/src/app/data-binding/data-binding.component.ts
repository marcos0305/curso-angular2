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
  
  getGosteiCurso(){
    return true;
  }
  getValor(){
    return  1;
  }

  

}
