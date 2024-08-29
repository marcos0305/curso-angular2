import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  standalone: true,
  imports: [],
  templateUrl: './criar-cursos.component.html',
  styleUrl: './criar-cursos.component.css'
})
export class CriarCursosComponent {
CursosService: any;


onAddCurso(curso: string) {
this.cursosService.addCurso(curso);
}
  cursos: string[] = [];

  constructor(private cursosService: CursosService){}

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}
