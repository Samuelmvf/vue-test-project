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

export default {
  name: 'page-editar-cliente',
  components: { TituloSecao, FormClienteContent },

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
        },{
          nome: 'Cancelar',
          class: '',
          func: () => {
            this.$router.push('/cliente')
          }
        }]
      }
    },

    actionEditarCliente (dadosCliente) {
      const edicaoPayload = {
        id: this.clienteId,
        ...dadosCliente
      }
      editarCliente(edicaoPayload)
        .then(() => {
          console.log('Cliente atualizado com sucesso.')
          this.$router.push('/cliente')
        })
        .catch(error => {
          console.log('Tente novamente mais tarde.', error)
        })
    },

    buscarCliente () {
      this.clienteId = this.$route.params.id
      buscarClientePorId(this.clienteId)
        .then(response => {
          this.$refs.formClienteContent.setCliente(response.data.cliente)
        })
        .catch(error => {
          console.log('Ocorreu um erro ao buscar cliente', error)
          this.$router.push('/cliente')
        })
    }
  },

  mounted () {
    this.buscarCliente()
  }
}
</script>
