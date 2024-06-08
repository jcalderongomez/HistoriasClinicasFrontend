import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad, IDataEspecialidad } from '../interfaces/IDataEspecialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  apiUrl: string = environment.apiUrl;
  especialidadUrl: string = `${this.apiUrl}/Especialidad`;
  
  resultados: Especialidad[] = [];
  
  
  constructor(private http: HttpClient) { }

  listarEspecialidad(){
    console.log ("listar Especialidades")
    this.http.get<IDataEspecialidad>(this.especialidadUrl)
              .subscribe(resp=> {
                this.resultados= resp.resultado;
              })
  }
  
  getEspecialidad(id: number){
    console.log ("tomar por id/")
    return this.http.get(this.especialidadUrl+'/'+id);
  }

  agregarEspecialidad(especialidad: Especialidad){
    console.log ("agregar")
    return  this.http.post(this.especialidadUrl,especialidad);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete<any>(`${this.especialidadUrl+"/"}${id}`);
  }
  
  actuaizar(id: number, especialidad: Especialidad): Observable<any>{
    return this.http.put(this.especialidadUrl+"/"+id, especialidad);
  }
}
