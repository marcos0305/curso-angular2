import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

    nomePortal: string;
    cursos: string[];

    constructor(private cursosService: CursosService ){
      this.nomePortal = 'https://www.youtube.com';

      this.cursos = this.cursosService.getCursos();
    }

    ngOnInit(){

    }
}
