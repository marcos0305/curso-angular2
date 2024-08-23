import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {

  mostrarCursos: boolean = false;
 
  constructor(){}
 
  ngOnInit(){
  }
 
  onMostrarCursos(): void{
   this.mostrarCursos = !this.mostrarCursos
  }

  

}
