import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EpsService } from '../Servicios/eps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  
  form: FormGroup;
  id: number;
  

  constructor(private fb: FormBuilder, private epsServicio: EpsService, private router: Router, private dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {nombreEPS:string, id:number}){
        this.id=data.id; 
        this.form = fb.group({
          
          nombreEPS: [data.nombreEPS, Validators.required]
    })
      
  }
  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.form.value.id= this.id;
    this.epsServicio.actuaizar(this.id, this.form.value).subscribe((data)=>{
      this.router.navigate(['/eps']);
      window.location.reload();
    })
  }

  ngOnInit(): void {
   
  }
  
  
}
