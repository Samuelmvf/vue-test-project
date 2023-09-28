export class MinLengthValidation {
  constructor (name, minLength) {
    this.name = name
    this.minLength = minLength
    this.message = `O campo deve ter no mínimo ${minLength} caracteres.`
  }

  validate (value) {
    return value?.length >= this.minLength || this.message
  }
}
