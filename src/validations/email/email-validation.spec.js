import { EmailValidation } from "@/validations"
import { faker } from "@faker-js/faker";

describe('EmailValidation', () => {
  it('Deve retornar um Error caso o email esteja inválido', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('error')
    expect(error).toBe(sut.message)
  })

  it('Deve retornar true caso o email esteja válido', () => {
    const sut = new EmailValidation('email')
    const campoValido = sut.validate(faker.internet.email())
    expect(campoValido).toBeTruthy()
  })
})
