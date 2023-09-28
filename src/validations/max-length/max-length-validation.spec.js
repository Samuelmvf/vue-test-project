import { MaxLengthValidation } from "@/validations"

const makeSut = () => {
  const maxLength = 10
  return new MaxLengthValidation('texto', maxLength)
}

describe('MaxLengthValidation', () => {
  it('Deve retornar um Error caso o texto ultrapasse o limite de caracteres', () => {
    const sut = makeSut();
    const retornoValidacao = sut.validate('test_value_error')
    expect(retornoValidacao).toBe(sut.message)
  });

  it('Deve retornar true caso o texto cumpra o limite de caracteres', () => {
    const sut = makeSut();
    const retornoValidacao = sut.validate('test_value')
    expect(retornoValidacao).toBeTruthy()
  });
})
