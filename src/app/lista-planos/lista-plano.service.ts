import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Medico } from "../Medico"
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ListaPlanoService{

  private urlApi = "http://localhost:8080/planos"

  constructor(private http : HttpClient) { }

  getPlanos(){
    return this.http.get<any>(this.urlApi)
  }

  buscarPorNome(nome: any){
    return this.http.get<any>(`${this.urlApi}/buscar?nome=${nome}`)
  }

  buscarPlanoId(id : any){
    return this.http.get<any>(`${this.urlApi}/${id}`)
  }

}
