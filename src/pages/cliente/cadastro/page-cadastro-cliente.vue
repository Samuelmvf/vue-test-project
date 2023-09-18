<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Cadastro de clientes"/>
    <v-form ref="formCadastroCliente" class="mt-4">
      <form-cliente-content :formulario-props="factoryFormCadastroCliente()"/>
    </v-form>
  </div>
</template>

<script>
import { cadastrarCliente } from '@/services/cliente-service'

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue";
import FormClienteContent from "@/components/form-cliente-content/form-cliente-content.vue";

export default {
  name: 'page-cadastro-cliente',
  components: { TituloSecao, FormClienteContent },
  inject: ['setAppLoading', 'emitirNotificacao'],
  methods: {
    factoryFormCadastroCliente () {
      return {
        inputPropsCustomizadas: {},
        acoes: [{
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
          func: () => {
            this.$router.push('/cliente')
          }
        }]
      }
    },

    actionCadastrarCliente (dadosCliente) {
      const cadastroPayload = {
        id: undefined,
        ...dadosCliente
      }

      this.setAppLoading(true)
      cadastrarCliente(cadastroPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao({
            mensagem: "Cliente cadastrado com sucesso!",
            propriedades: {
              timeout: 2000,
              color: 'success'
            }
          })
          this.$router.push('/cliente')
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao({
            mensagem: "Erro ao cadastrar um cliente, tente novamente mais tarde.",
            propriedades: {
              timeout: 2000,
              color: 'error'
            }
          })
        })
    }
  }
}
</script>
