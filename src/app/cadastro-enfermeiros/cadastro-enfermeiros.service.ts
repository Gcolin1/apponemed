import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CadastroEnfermeirosService{

  urlApi = 'http://localhost:8080/enfermeiros'

  //urlApiAdvpl = 'http://localhost:8080/api/onemed/v1/enfermeiro'

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

}

