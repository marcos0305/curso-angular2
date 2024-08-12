import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';//prepara a aplicacão para ser executada
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 

import { MeuPrimeiroComponent } from './primeiro-projeto/meu-primeiro.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { merge } from 'rxjs';
import { CursosModule } from '../cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';



@NgModule({ //decoreidor
  declarations: [ //declaração de todos os componentes,diretidas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    OperadorElvisComponent,
  ],
  imports: [ // adiciona os modulos que serao utilizados na aplicação
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // serviços que ficaram disponiveis para todos componentes
    provideClientHydration()
  ],
  bootstrap: [AppComponent] // 
})
export class AppModule { } //declaracão da classe
