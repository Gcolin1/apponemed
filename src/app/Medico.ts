export interface Medico{
    id: string
    crm: string
    email: string
    especialidade: string
    nome: string
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
