import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CadastroEnfermeirosService{

  urlApi = 'http://localhost:8080/enfermeiros'

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}

