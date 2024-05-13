import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';//prepara a aplicacão para ser executada


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './primeiro-projeto/meu-primeiro.component';
import { CursosModule } from '../cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';



@NgModule({ //decoreidor
  declarations: [ //declaração de todos os componentes e pipes
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
  ],
  imports: [ // adiciona os modulos que serao utilizados na aplicação
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [ // serviços que ficaram disponiveis para todos componentes
    provideClientHydration()
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { } //declaracão da classe
