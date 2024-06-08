import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent,
    EditarComponent,
    EliminarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MaterialModule
  ]
})
export class PacienteModule { }
