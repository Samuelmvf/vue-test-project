export class ValidationComposite {
  validations = []
  constructor(validations) {
    this.validations = validations
  }
  validar (campoSobValidacao, valorCampo) {
    const validadores = this.validations.filter((validation) => validation.nomeCampo === campoSobValidacao)

    for (const validador of validadores) {
      const retornoValidacao = validador.validar(valorCampo)
      if (typeof retornoValidacao === 'string')
        return retornoValidacao
    }

    return true
  }
}
