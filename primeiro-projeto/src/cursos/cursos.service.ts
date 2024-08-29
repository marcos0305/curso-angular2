import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  [x: string]: any;

  constructor() { 

  }

  getCursos(){
    return['Java', 'Ext JS', 'Angular'];
  }
}
