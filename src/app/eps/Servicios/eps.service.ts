import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Eps, IDataEps } from '../Interfaces/IDataEps';


@Injectable({
  providedIn: 'root'
})

export class EpsService {
  apiUrl: string = environment.apiUrl;
  epsUrl: string = `${this.apiUrl}/eps`;
  
  resultados: Eps[] = [];
  
  
  constructor(private http: HttpClient) { }

  listarEps(){
    console.log ("listar EPS")
    this.http.get<IDataEps>(this.epsUrl)
              .subscribe(resp=> {
                this.resultados= resp.resultado;
              })
  }
  
  getEps(id: number){
    console.log ("tomar por id/")
    return this.http.get(this.epsUrl+'/'+id);
  }

  agregarEps(eps: Eps){
    return  this.http.post<any>(this.epsUrl,eps);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete<any>(`${this.epsUrl+"/"}${id}`);
  }
  
  actuaizar(id: number, eps: Eps): Observable<any>{
    return this.http.put(this.epsUrl+"/"+id, eps);
  }
}
