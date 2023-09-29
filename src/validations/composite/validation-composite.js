export const ValidationComposite = (validations) => ({
  validations,
  validar: function (campoSobValidacao, valorCampo) {
    const validadores = this.validations.filter((v) => v.nomeCampo === campoSobValidacao)

    for (const validador of validadores) {
      const retornoValidacao = validador.validar(valorCampo)
      if (typeof retornoValidacao === 'string')
        return retornoValidacao
    }

    return true
  }
})
