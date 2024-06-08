import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ListarComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    MaterialModule
  ]
})
export class MedicoModule { }
