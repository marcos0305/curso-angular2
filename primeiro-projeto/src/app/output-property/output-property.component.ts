import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Input() valor = 0;

  @Output() mudouValor= new EventEmitter();

  @ViewChild('campoInput') campoValorInput!:ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.valor++;
    this.mudouValor.emit ('mudou o valor');
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit ('mudou o valor');
  }
}
