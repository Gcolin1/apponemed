import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DetalheService{

  private urlApi = "http://localhost:8080/medicos"

  constructor(private http : HttpClient) { }


  DeletarMedicoId(id : any){
    return this.http.delete(`${this.urlApi}/${id}`)
  }

  editar(atualizar: any, id: any){
    return this.http.put(`${this.urlApi}/${id}`, atualizar)
  }

}
