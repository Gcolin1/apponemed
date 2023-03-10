import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Medico } from "../Medico"
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ListaMedicoService{

  constructor() { }
}