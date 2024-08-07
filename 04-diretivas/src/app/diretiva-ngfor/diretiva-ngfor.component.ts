import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {

  cursos: string[] = ["Angular 2", "Java", "PHP"];
i: any;

  constructor(){}

  ngOnInit(){
    for(let i=0; i<this.cursos.length; i++){
      let curso = this.cursos [i]
    }
  }
}
