export class RequiredFieldValidation {
  message = 'Campo obrigatório'
  constructor (name) {
    this.name = name
  }

  validate (value) {
    return !!value || this.message
  }
}
