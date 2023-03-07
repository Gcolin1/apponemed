import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CadastroMedicoService{

  urlApi = 'http://localhost:8080/medicos'

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}


