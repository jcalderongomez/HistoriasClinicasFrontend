import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EpsService } from '../Servicios/eps.service';
import Swal from 'sweetalert2';
import { Eps } from '../Interfaces/IDataEps';
import { Route, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  
  constructor(private epsService: EpsService, private router: Router){}

  epsform = new FormGroup({
    
    nombreEPS: new FormControl(null,Validators.required)
  })
 
    onSubmit(){
      if (this.epsform.valid) {
        const epsData = this.epsform.value;
        console.log(epsData);
        const nombreEPS: string = epsData.nombreEPS ?? ''; // Usa el operador de fusión nula (??) para manejar null y undefined
    
        const eps: Eps = {
          nombreEPS: nombreEPS
        }
        this.epsService.agregarEps(eps).subscribe({
          next: (data: any) => {
            Swal.fire({
              icon: "success",
              title: "La EPS fue creada correctamente",
              showConfirmButton: true
            });
            this.router.navigate(['/eps']);
          },
          error: (error: any) => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error al crear la EPS",
              showConfirmButton: true
            });
          }
        });
      }
    }
}