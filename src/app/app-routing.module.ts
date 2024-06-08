import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartido/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },    
  { path: 'eps', 
    loadChildren: () => import('./eps/eps.module').then(m => m.EpsModule)
  },  
  
  { path: 'especialidad', 
    loadChildren: () => import('./especialidad/especialidad.module').then(m => m.EspecialidadModule)
  },  

  { path: 'medico', 
    loadChildren: () => import('./medico/medico.module').then(m => m.MedicoModule)
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
