export class EmailValidation {
  mensagem = 'O email digitado é inválido.'
  constructor (nomeCampo) {
    this.nomeCampo = nomeCampo
  }

  validar (valor) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return (!valor || emailRegex.test(valor)) || this.mensagem
  }
}
