import { ValidationBuilder } from "@/validations/builder";
import { faker } from '@faker-js/faker'
import { CampoObrigatorioValidation, EmailValidation, MaxLengthValidation, MinLengthValidation } from "@/validations";

describe('ValidationBuilder', () => {

  it('Deve retornar a validação de campo obrigatório', () => {
    const nomeCampo = faker.database.column()
    const validations = new ValidationBuilder(nomeCampo).required().build()
    expect(validations).toEqual([ new CampoObrigatorioValidation(nomeCampo) ])
  })
  it('Deve retornar a validação de minlength', () => {
    const nomeCampo = faker.database.column()
    const minLength = 10
    const validations = new ValidationBuilder(nomeCampo).minLength(minLength).build()
    expect(validations).toEqual([ new MinLengthValidation(nomeCampo, minLength) ])
  })
  it('Deve retornar a validação de maxlength', () => {
    const nomeCampo = faker.database.column()
    const maxLength = 10
    const validations = new ValidationBuilder(nomeCampo).maxLength(maxLength).build()
    expect(validations).toEqual([ new MaxLengthValidation(nomeCampo, maxLength) ])
  })
  it('Deve retornar a validação de email', () => {
    const nomeCampo = faker.database.column()
    const validations = new ValidationBuilder(nomeCampo).email().build()
    expect(validations).toEqual([ new EmailValidation(nomeCampo) ])
  })

  it('Deve possuir 4 validações e elas devem ocorrer na devida ordem', () => {
    const nomeCampo = faker.database.column()
    const testLength = 10
    const validations = new ValidationBuilder(nomeCampo).required().minLength(testLength).maxLength(testLength).email().build()
    expect(validations.length).toEqual(4)
    expect(validations).toEqual([
      new CampoObrigatorioValidation(nomeCampo),
      new MinLengthValidation(nomeCampo, testLength),
      new MaxLengthValidation(nomeCampo, testLength),
      new EmailValidation(nomeCampo)
    ])
  })
})
