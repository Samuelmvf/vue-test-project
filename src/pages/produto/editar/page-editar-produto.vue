<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Editar produto"/>
    <v-form ref="formEditarProduto" class="mt-4">
      <form-produto-content ref="formProdutoContent" :formulario-props="factoryFormEdicaoProduto()"/>
    </v-form>
  </div>
</template>

<script>
import { buscarProdutoPorId, editarProduto} from "@/services/produto-service";
import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao";

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import FormProdutoContent from "@/components/form-produto-content/form-produto-content.vue";

export default {
  name: 'page-editar-produto',
  components: { TituloSecao, FormProdutoContent },
  inject: [ 'setAppLoading', 'emitirNotificacao' ],

  data: () => ({
    produtoId: undefined
  }),

  methods: {
    factoryFormEdicaoProduto () {
      return {
        acoes: [{
          nome: 'Salvar',
          class: 'bg-success',
          func: (dadosProduto) => {
            this.$refs.formEditarProduto.validate()
              .then(({ valid }) => {
                if (valid)
                  this.actionEditarProduto(dadosProduto)
              })
          }
        }, {
          nome: 'Cancelar',
          class: '',
          func: () => this.$router.push('/produto')
        }]
      }
    },

    actionEditarProduto (dadosProduto) {
      const edicaoPayload = {
        id: this.produtoId,
        ...dadosProduto
      }

      this.setAppLoading(true)
      editarProduto(edicaoPayload)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Produto atualizado com sucesso!')
          this.$router.push('/produto')
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Erro ao atualizar produto. Tente novamente mais tarde.')
        })
    },

    buscarProduto () {
      this.produtoId = this.$route.params.id
      this.setAppLoading(true)

      buscarProdutoPorId(this.produtoId)
        .then(response => {
          this.setAppLoading(false)
          this.$refs.formProdutoContent.setProduto(response.data.produto)
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Ocorreu um erro ao buscar produto.')
          this.$router.push('/produto')
        })
    }
  },

  mounted () {
    this.buscarProduto()
  }
}
</script>
