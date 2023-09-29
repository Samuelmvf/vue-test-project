export class MaxLengthValidation {
  constructor (nomeCampo, maxLength) {
    this.nomeCampo = nomeCampo
    this.maxLength = maxLength
    this.mensagem = `O campo deve ter no máximo ${maxLength} caracteres.`
  }

  validar (valor) {
    return valor?.length <= this.maxLength || this.mensagem
  }
}
