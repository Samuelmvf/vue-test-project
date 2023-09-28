import { MinLengthValidation } from "@/validations"

const makeSut = () => {
  const minLength = 10
  return new MinLengthValidation('texto', minLength)
}

describe('MinLengthValidation', () => {
  it('Deve retornar um Error caso o texto não possua o tamanho mínimo de caracteres', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validate('error')
    expect(retornoValidacao).toBe(sut.message)
  });

  it('Deve retornar true caso o texto possua o tamanho minimo de caracteres.', () => {
    const sut = makeSut()
    const retornoValidacao = sut.validate('test_value')
    expect(retornoValidacao).toBeTruthy()
  });
})
