import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Input() valor = 0;

  @Output() mudouValor= new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit ('mudou o valor');
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit ('mudou o valor');
  }
}
