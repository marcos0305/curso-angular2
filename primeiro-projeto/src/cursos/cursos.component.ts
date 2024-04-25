import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

    nomePortal: string;
    cursos: string[] = ['Java', 'Ext JS', 'angular'];

    constructor(){
      this.nomePortal = 'https://www.youtube.com';

      for(let i=0; i<this.cursos.length; i++){
        let curso = this.cursos[i];
      }
    }

    ngOnInit(){

    }
}
