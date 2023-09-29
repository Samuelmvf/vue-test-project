import { faker } from "@faker-js/faker"
import { MinLengthValidation } from "@/validations"

const makeSut = (minLength) => new MinLengthValidation(faker.database.column(), minLength)

describe('MinLengthValidation', () => {
  it('Deve retornar um Error caso o texto não possua o tamanho mínimo de caracteres', () => {
    const minLength = 10
    const sut = makeSut(minLength)
    const retornoValidacao = sut.validar(faker.string.alphanumeric({ length: minLength - 1 }))
    expect(retornoValidacao).toBe(sut.mensagem)
  });

  it('Deve retornar true caso o texto possua o tamanho minimo de caracteres.', () => {
    const minLength = 10
    const sut = makeSut(minLength)
    const retornoValidacao = sut.validar(faker.string.alphanumeric({ length: minLength }))
    expect(retornoValidacao).toBe(true)
  });
})
