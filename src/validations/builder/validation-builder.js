import { CampoObrigatorioValidation, EmailValidation,MaxLengthValidation, MinLengthValidation} from "@/validations"

export class ValidationBuilder {
  validations = []
  nomeCampo = ''

  constructor (nomeCampo) {
    this.nomeCampo = nomeCampo
  }

  required () {
    this.validations.push(new CampoObrigatorioValidation(this.nomeCampo))
    return this
  }

  email () {
    this.validations.push(new EmailValidation(this.nomeCampo))
    return this
  }

  maxLength (maxLength) {
    this.validations.push(new MaxLengthValidation(this.nomeCampo, maxLength))
    return this;
  }

  minLength (minLength) {
    this.validations.push(new MinLengthValidation(this.nomeCampo, minLength))
    return this;
  }

  build () {
    return this.validations
  }
}


