import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CadastroPacienteService{

  urlApi = 'http://localhost:8080/pacientes'

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}