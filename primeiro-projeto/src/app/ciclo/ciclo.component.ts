import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {


   @Input() valorInicial = 10;

  constructor(){
    this.log('contructor');
  }

  NgOnChanges(){
    this.log('NgOnChanges');
    
  }

  NgOnInit(){
    this.log('NgOnInit');
  }

  NgDoCheck(){
    this.log('NgDoCheck');
  }

  NgAfterContentInt(){
    this.log('NgAfterContentInt');
  }

  NgAfterContentCheck(){
    this.log('NgAfterContentCheck');
  }
  NgAfterViewInit(){
    this.log('NgAfterViewInit');
  }

  NgOnDestroy(){
    this.log('NgOnDestroy');
  }

  private log(hook: string){
    console.log(hook)
  }
}
