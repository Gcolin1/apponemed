import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Medico } from "../Medico"
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ListaMedicoService{

  private urlApi = "http://localhost:8080/medicos"

  constructor(private http : HttpClient) { }

  getMedicos(){
    return this.http.get<any>(this.urlApi)
  }

  buscarPorNome(nome: any){
    return this.http.get<any>(`${this.urlApi}/buscar?nome=${nome}`)
  }

}