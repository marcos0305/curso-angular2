import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:src/cursos/cursos.module.ts
=======
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
>>>>>>> 109e44ba910e69d3bb7f4f65f34e8778d7580e98:primeiro-projeto/src/cursos/cursos.module.ts



@NgModule({
  declarations: [],
  imports: [
    CommonModule
<<<<<<< HEAD:src/cursos/cursos.module.ts
  ]
=======
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
>>>>>>> 109e44ba910e69d3bb7f4f65f34e8778d7580e98:primeiro-projeto/src/cursos/cursos.module.ts
})
export class CursosModule { }
