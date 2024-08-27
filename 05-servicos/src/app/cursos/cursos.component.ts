import { Component } from '@angular/core';

import { CursosService } from './cursos.service'; 

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  cursos: string[] = [];
  cursosService: CursosService;


  constructor(){
    this.cursosService = new CursosService();
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}
