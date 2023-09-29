export class CampoObrigatorioValidation {
  mensagem = 'Campo obrigatório'
  constructor (nomeCampo) {
    this.nomeCampo = nomeCampo
  }

  validar (valor) {
    return !!valor || this.mensagem
  }
}
