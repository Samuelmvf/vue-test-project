<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Editar cliente"/>

    <v-form ref="formEditarCliente" class="mt-4">
      <form-cliente-content
        ref="formClienteContent"
        :acoes-formulario="factoryAcoesFormulario()"
        :validadores="factoryValidadores()"
        :customizacoes-inputs="factoryCustomizacoesInputs()"
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
  name: 'page-editar-cliente',

  components: { TituloSecao, FormClienteContent },

  inject: [ 'setAppLoading', 'emitirNotificacao' ],

  data: () => ({
    clienteId: undefined
  }),

  methods: {
    actionEditarCliente (dadosCliente) {
      const edicaoPayload = {
        id: this.clienteId,
        ...dadosCliente
      }
      this.setAppLoading(true)
      ClienteRepository.editar(this.clienteId, edicaoPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Cliente atualizado com sucesso.')
          this.$router.push('/cliente')
        })
        .catch(({ message }) => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, message)
        })
    },

    buscarCliente () {
      this.clienteId = this.$route.params.id
      this.setAppLoading(true)

      ClienteRepository.buscarPorId(this.clienteId)
        .then(response => {
          this.setAppLoading(false)
          const clienteTratado = this.getClienteTratado(response.data.cliente)
          this.$refs.formClienteContent.setCliente(clienteTratado)
        })
        .catch(({ message }) => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, message)
          this.$router.push('/cliente')
        })
    },

    factoryAcoesFormulario () {
      return [{
        nome: 'Salvar',
        class: 'bg-success',
        func: (dadosCliente) => {
          this.$refs.formEditarCliente.validate()
            .then(({ valid }) => {
              if (valid)
                this.actionEditarCliente(dadosCliente)
            })
        }
      }, {
        nome: 'Cancelar',
        class: '',
        func: () => this.$router.push('/cliente')
      }]
    },

    factoryValidadores () {
      return new ValidationComposite([
        ...new Builder('nome').required().build(),
        ...new Builder('documento').required().build(),
        ...new Builder('telefone').required().build(),
        ...new Builder('email').required().email().build()
      ])
    },

    factoryCustomizacoesInputs () {
      return {
        email: {
          disabled: true
        }
      }
    },

    getClienteTratado (cliente) {
      return {
        nome: cliente.nome,
        documento: cliente.documento,
        telefone: cliente.telefone,
        email: cliente.email,
        ativo: cliente.ativo
      }
    }
  },

  mounted () {
    this.buscarCliente()
  }
}
</script>
