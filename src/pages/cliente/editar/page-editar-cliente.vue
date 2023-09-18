<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Editar de clientes"/>
    <v-form ref="formEditarCliente" class="mt-4">
      <form-cliente-content ref="formClienteContent" :formulario-props="factoryFormEdicaoCliente()"/>
    </v-form>
  </div>
</template>

<script>
import { buscarClientePorId, editarCliente} from "@/services/cliente-service"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import FormClienteContent from "@/components/form-cliente-content/form-cliente-content.vue";
import {NOTIFICACAO_TIPOS} from "@/contants/constantes-notificacao";

export default {
  name: 'page-editar-cliente',
  components: { TituloSecao, FormClienteContent },
  inject: [ 'setAppLoading', 'emitirNotificacao' ],

  data: () => ({
    clienteId: undefined
  }),

  methods: {
    factoryFormEdicaoCliente () {
      return {
        inputPropsCustomizadas: {
          email: {
            disabled: true
          }
        },
        acoes: [{
          nome: 'Editar',
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
      }
    },

    actionEditarCliente (dadosCliente) {
      const edicaoPayload = {
        id: this.clienteId,
        ...dadosCliente
      }

      this.setAppLoading(true)
      editarCliente(edicaoPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Cliente atualizado com sucesso.')
          this.$router.push('/cliente')
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Tente novamente mais tarde.')
        })
    },

    buscarCliente () {
      this.clienteId = this.$route.params.id
      buscarClientePorId(this.clienteId)
        .then(response => {
          this.$refs.formClienteContent.setCliente(response.data.cliente)
        })
        .catch(() => {
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Ocorreu um erro ao buscar cliente')
          this.$router.push('/cliente')
        })
    }
  },

  mounted () {
    this.buscarCliente()
  }
}
</script>
