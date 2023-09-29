export class ValidationSpy {
  nomeCampo
  error = ''
  constructor (nomeCampo) {
    this.nomeCampo = nomeCampo
  }
  validar () {
    return this.error.length ? this.error : true
  }
}
