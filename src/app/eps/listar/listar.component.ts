import { Component } from '@angular/core';
import { EpsService } from '../Servicios/eps.service';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Eps } from '../Interfaces/IDataEps';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  displayedColumns: string[] = ['id','nombreEps','estado','acciones'];
  constructor(private epsService: EpsService, 
                public dialog: MatDialog, 
                private router: Router){  }

  ngOnInit(): void{
    this.epsService.listarEps();
  }

   get resultados(){
      return this.epsService.resultados;  
   }

  editarEps(eps: EpsService){
    this.dialog.open(EditarComponent,{disableClose:true, width:'400px', data:eps})
      .afterClosed()
      .subscribe((resultado)=>{
        if(resultado=== 'true') 
          this.resultados;
        })   
      }

    removerEps(eps: Eps) {
      
      Swal.fire({
        title: '¿Desea Eliminar la EPS?',
        text: eps.nombreEPS,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'No'
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          if(eps.id!== undefined){
            this.epsService.eliminar(eps.id).subscribe({
              next: (data) => {
                console.log(data); // Verificar la estructura de la respuesta en la consola
                if (data && data.isExitoso) {
                  Swal.fire({
                    icon: "success",
                    title: "La EPS fue eliminada correctamente",
                    showConfirmButton: true,
                  });
                    
                } 
                else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "La EPS no pudo ser eliminada",
                    showConfirmButton: true,
                  });
                }
              },
              error: (e) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Ocurrió un error al intentar eliminar la EPS",
                  showConfirmButton: true,
                });
                this.router.navigate(['/eps']);
              }
            });
            
            
          }
        }
      });
    }
}
