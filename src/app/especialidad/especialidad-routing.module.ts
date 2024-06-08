import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListarComponent } from "./listar/listar.component";
import { AgregarComponent } from "./agregar/agregar.component";
import { EditarComponent } from "./editar/editar.component";
import { EliminarComponent } from "./eliminar/eliminar.component";
import { NgModule } from "@angular/core";


const routes: Routes= [
  {
    path: '', component: HomeComponent, 
    children: [
      { path: 'listar', component: ListarComponent },
      { path: 'crear', component: AgregarComponent },
      { path: 'editar/:id', component: EditarComponent },
      { path: 'eliminar/:id', component: EliminarComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class EspecialidadRoutingModule { }
