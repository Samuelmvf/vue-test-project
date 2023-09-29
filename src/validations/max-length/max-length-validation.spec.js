import { faker } from "@faker-js/faker"
import { MaxLengthValidation } from "@/validations"

const makeSut = (maxLength) => new MaxLengthValidation(faker.database.column(), maxLength)

describe('MaxLengthValidation', () => {
  it('Deve retornar um Error caso o texto ultrapasse o limite de caracteres', () => {
    const maxLength = 10
    const sut = makeSut(maxLength);
    const retornoValidacao = sut.validar(faker.string.alphanumeric({ length: maxLength + 1 }))
    expect(retornoValidacao).toBe(sut.mensagem)
  });

  it('Deve retornar true caso o texto cumpra o limite de caracteres', () => {
    const maxLength = 10
    const sut = makeSut(maxLength);
    const retornoValidacao = sut.validar(faker.string.alphanumeric({ length: maxLength }))
    expect(retornoValidacao).toBe(true)
  });
})
