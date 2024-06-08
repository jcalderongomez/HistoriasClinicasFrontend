import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';
import { EpsRoutingModule } from './eps-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

  
@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    ListarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EpsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ]
})
export class EpsModule { }
