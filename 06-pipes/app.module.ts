import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FiltroArrayPipe } from './src/app/filtro-array.pipe';

@NgModule({
  declarations: [
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule // Outros módulos que sua aplicação usa
  ],
  providers: [],
  bootstrap: []  // Componente de bootstrap principal
})
export class AppModule { }
