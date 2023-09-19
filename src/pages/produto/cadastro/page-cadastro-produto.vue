<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Cadastro de produto"/>
    <v-form ref="formCadastroProduto" class="mt-4">
      <form-produto-content :formulario-props="factoryFormCadastroProduto()"/>
    </v-form>
  </div>
</template>

<script>
import { cadastrarProduto } from '@/services/produto-service'
import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao";

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue";
import FormProdutoContent from "@/components/form-produto-content/form-produto-content.vue";

export default {
  name: 'page-cadastro-produto',
  components: { TituloSecao, FormProdutoContent},
  inject: [ 'setAppLoading', 'emitirNotificacao' ],

  methods: {
    factoryFormCadastroProduto () {
      return {
        inputPropsCustomizadas: {},
        acoes: [{
          nome: 'Cadastrar',
          class: 'bg-success',
          func: (dadosProduto) => {
            this.$refs.formCadastroProduto.validate()
              .then(({ valid }) => {
                if (valid)
                  this.actionCadastrarProduto(dadosProduto)
              })
          }
        },{
          nome: 'Cancelar',
          class: '',
          func: () => this.$router.push('/cliente')
        }]
      }
    },

    actionCadastrarProduto (dadosProduto) {
      const cadastroPayload = {
        id: undefined,
        ...dadosProduto
      }

      this.setAppLoading(true)
      cadastrarProduto(cadastroPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Produto cadastrado com sucesso!')
          this.$router.push('/produto')
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Erro ao cadastrar um produto, tente novamente mais tarde.')
        })
    }
  }
}
</script>
