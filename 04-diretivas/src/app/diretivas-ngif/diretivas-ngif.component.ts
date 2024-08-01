import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-diretivas-ngif',
  standalone: true,
  imports: [],
  templateUrl: './diretivas-ngif.component.html',
  styleUrl: './diretivas-ngif.component.css'
})
export class DiretivasNgifComponent implements OnInit {
 cursos: string[] = ["angular 2"];


 mostrarCursos: boolean = false;
 
 constructor(){}

 ngOnInit(){
 }

 onMostrarCurso(): void{
  this.mostrarCursos = !this.mostrarCursos
 }

}
