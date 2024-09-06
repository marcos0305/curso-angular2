import { Injectable } from "@angular/core";
import { EventEmitter } from "node:stream";
import { LogService } from "../shared/log.service";
@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter

    private cursos: string[] = ['Java', 'Angular', 'Phonegap'];

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('Obetendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog('Criando um novo curso ' + curso);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso)
    }
}