import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';//prepara a aplicacão para ser executada


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './primeiro-projeto/meu-primeiro.component';
<<<<<<< HEAD:src/app/app.module.ts
=======
import { CursosModule } from '../cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

>>>>>>> 109e44ba910e69d3bb7f4f65f34e8778d7580e98:primeiro-projeto/src/app/app.module.ts


@NgModule({ //decoreidor
  declarations: [ //declaração de todos os componentes,diretidas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
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
