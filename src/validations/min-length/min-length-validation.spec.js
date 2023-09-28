import { faker } from "@faker-js/faker"
import { MinLengthValidation } from "@/validations"

const makeSut = (minLength) => {
  return new MinLengthValidation(faker.database.column(), minLength)
}

describe('MinLengthValidation', () => {
  it('Deve retornar um Error caso o texto não possua o tamanho mínimo de caracteres', () => {
    const minLength = 10
    const sut = makeSut(minLength)
    const retornoValidacao = sut.validate(faker.string.alphanumeric({ length: minLength - 1 }))
    expect(retornoValidacao).toBe(sut.message)
  });

  it('Deve retornar true caso o texto possua o tamanho minimo de caracteres.', () => {
    const minLength = 10
    const sut = makeSut(minLength)
    const retornoValidacao = sut.validate(faker.string.alphanumeric({ length: minLength }))
    expect(retornoValidacao).toBe(true)
  });
})
