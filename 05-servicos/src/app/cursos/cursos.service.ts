import { Injectable } from "@angular/core";
import { EventEmitter } from "node:stream";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter

    private cursos: string[] = ['Java', 'Angular', 'Phonegap'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso)
    }
}