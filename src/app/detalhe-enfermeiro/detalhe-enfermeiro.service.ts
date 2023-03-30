import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DetalheEnfermeiroService{

  private urlApi = "http://localhost:8080/enfermeiros"

  constructor(private http : HttpClient) { }


  DeletarEnfermeiroId(id : any){
    return this.http.delete(`${this.urlApi}/${id}`)
  }

}
