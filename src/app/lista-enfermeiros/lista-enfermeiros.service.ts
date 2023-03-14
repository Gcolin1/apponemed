import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Medico } from "../Medico"
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ListaEnfermeirosService{

  private urlApi = "http://localhost:8080/enfermeiros"

  constructor(private http : HttpClient) { }

  getEnfermeiros(){
    return this.http.get<any>(this.urlApi)
  }

  buscarPorNome(nome: any){
    return this.http.get<any>(`${this.urlApi}/buscar?nome=${nome}`)
  }

}
