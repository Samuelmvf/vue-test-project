import { faker } from "@faker-js/faker"
import { CampoObrigatorioValidation } from "@/validations"

const makeSut = () => new CampoObrigatorioValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
  it('Deve retornar um error caso o campo esteja vazio', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validar('')
    expect(retornoValidacao).toBe(sut.mensagem)
  });

  it('Deve retornar true caso o campo esteja valido', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validar(faker.lorem.word())
    expect(retornoValidacao).toBe(true)
  });
})
