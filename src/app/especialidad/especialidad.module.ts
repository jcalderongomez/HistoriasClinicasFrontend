import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EspecialidadRoutingModule } from './especialidad-routing.module';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    EspecialidadRoutingModule,
    MaterialModule
  ]
})
export class EspecialidadModule { }
