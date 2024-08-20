import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver (){
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') onMouseLeave (){
    this.backgroundColor = this.defauldColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defauldColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow'; 


  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defauldColor;
  }
}
