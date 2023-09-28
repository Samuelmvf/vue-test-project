import { faker } from "@faker-js/faker"
import { RequiredFieldValidation } from "@/validations"

const makeSut = () => new RequiredFieldValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
  it('Deve retornar um error caso o campo esteja vazio', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validate('')
    expect(retornoValidacao).toBe(sut.message)
  });

  it('Deve retornar true caso o campo esteja valido', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validate(faker.lorem.word())
    expect(retornoValidacao).toBe(true)
  });
})
