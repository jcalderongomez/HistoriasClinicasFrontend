import { Component } from '@angular/core';
import { EpsService } from '../Servicios/eps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  id: any;
  constructor(private epsService: EpsService, private route: ActivatedRoute){}
  
  ngOnInit(): void{
    console.log(":::::::::::::cargado eliminar:::::::::::::");
    this.id = this.route.snapshot.paramMap.get('id');
    this.epsService.getEps(this.id).subscribe((data:any)=>{
      console.log(data);
    })
  }
}