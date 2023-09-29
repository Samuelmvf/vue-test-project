export class MinLengthValidation {
  constructor (nomeCampo, minLength) {
    this.nomeCampo = nomeCampo
    this.minLength = minLength
    this.mensagem = `O campo deve ter no mínimo ${minLength} caracteres.`
  }

  validar (valor) {
    return valor?.length >= this.minLength || this.mensagem
  }
}
