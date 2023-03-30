export interface Enfermeiro{
  id: string
  nome: string
  email: string
  cre: string
  endereco: {
    logradouro: string
    bairro: string
    cep: string
    cidade: string
    uf: string
    numero: string
    complemento: string
  }
}
