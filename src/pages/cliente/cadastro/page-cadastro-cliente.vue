<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Cadastro de clientes"/>

    <v-form ref="formCadastroCliente" class="mt-4">
      <form-cliente-content
        :acoes-formulario="factoryAcoesFormulario()"
        :validadores="factoryValidadores()"
      />
    </v-form>
  </div>
</template>

<script>
import { ClienteRepository } from "@/repository"

import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import FormClienteContent from "@/components/form/cliente-content/form-cliente-content.vue"

import { ValidationComposite } from "@/validations/composite/validation-composite"
import { ValidationBuilder as Builder } from "@/validations/builder/validation-builder"

export default {
  name: 'page-cadastro-cliente',
  components: { TituloSecao, FormClienteContent },
  inject: [ 'setAppLoading', 'emitirNotificacao' ],

  methods: {
    actionCadastrarCliente (dadosCliente) {
      const cadastroPayload = {
        id: undefined,
        ...dadosCliente
      }

      this.setAppLoading(true)
      ClienteRepository.cadastrar(cadastroPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Cliente cadastrado com sucesso')
          this.$router.push('/cliente')
        })
        .catch(({ message }) => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, message)
        })
    },

    factoryAcoesFormulario () {
      return [
        {
          nome: 'Cadastrar',
          class: 'bg-success',
          func: (dadosCliente) => {
            this.$refs.formCadastroCliente.validate()
              .then(({ valid }) => {
                if (valid)
                  this.actionCadastrarCliente(dadosCliente)
              })
          }
        },{
          nome: 'Cancelar',
          class: '',
          func: () => this.$router.push('/cliente')
        }
      ]
    },

    factoryValidadores () {
      return new ValidationComposite([
        ...new Builder('nome').required().build(),
        ...new Builder('documento').required().build(),
        ...new Builder('telefone').required().build(),
        ...new Builder('email').required().email().build()
      ])
    }
  }
}
</script>
