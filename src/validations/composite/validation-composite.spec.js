import { faker } from "@faker-js/faker"
import { ValidationComposite } from "@/validations/composite/validation-composite"
import { ValidationSpy } from "@/validations/test/mock-validation";

describe('ValidationComposite', () => {
  it('Deve retornar o primeiro erro de validação encontrado', () => {
    const nomeCampo = faker.database.column()

    const mockedSpy = new ValidationSpy(nomeCampo)
    mockedSpy.error = faker.lorem.words()

    const mockedSpy2 = new ValidationSpy(nomeCampo)
    mockedSpy2.error = faker.lorem.words()

    const sut = ValidationComposite([mockedSpy, mockedSpy2])
    const retornoValidacao = sut.validar(nomeCampo, faker.lorem.word())

    expect(retornoValidacao).toBe(mockedSpy.error)
  })

  it('Deve retornar true se todas validações estiverem corretas', () => {
    const nomeCampo = faker.database.column()

    const mockedSpy = new ValidationSpy(nomeCampo)
    const sut = ValidationComposite([mockedSpy])

    const retornoValidacao = sut.validar(nomeCampo, faker.lorem.word())
    expect(retornoValidacao).toBe(true)
  })
})
