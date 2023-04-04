import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AgendarService{

  urlApi = 'http://localhost:8080/atendimento'

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: any){
    return this.http.post(this.urlApi, cadastro)
  }

  getAtendimento(){
    return this.http.get<any>(this.urlApi)
  }

  buscarPorNome(nome: any){
    return this.http.get<any>(`${this.urlApi}/buscar?nome=${nome}`)
  }

  buscarAtendimentoId(id : any){
    return this.http.get<any>(`${this.urlApi}/${id}`)
  }

}


