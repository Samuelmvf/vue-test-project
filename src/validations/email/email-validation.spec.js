import { faker } from "@faker-js/faker"
import { EmailValidation } from "@/validations"

const makeSut = () => new EmailValidation('email')

describe('EmailValidation', () => {
  it('Deve retornar um Error caso o email esteja inválido', () => {
    const sut = makeSut()
    const error = sut.validar(faker.lorem.word())
    expect(error).toBe(sut.mensagem)
  })

  it('Deve retornar true caso o email esteja válido', () => {
    const sut = makeSut()
    const campoValido = sut.validar(faker.internet.email())
    expect(campoValido).toBe(true)
  })

  it('Deve retornar true caso o email esteja vazio', () => {
    const sut = makeSut()
    const campoValido = sut.validar('')
    expect(campoValido).toBe(true)
  })
})
