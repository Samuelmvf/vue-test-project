<template>
  <div class="center max-app-size py-10 px-4 fill-height">
    <titulo-secao texto="Listagem de produtos"/>

    <v-card class="mt-4 list-content">
      <v-list class="form-card-content pt-4">
        <item-generico
          v-for="(produto, index) in dadosPaginaAtual"
          :key="produto.id"
          :id="produto.id"
          :ativo="produto.ativo"
          :nome="produto.nome"
          :propriedades-descritas="{}"
          :border-bottom="index < dadosPaginaAtual.length - 1"
          :acoes="getAcoesDisponiveisProduto()"
        />
      </v-list>

      <v-card-actions class="form-card-actions d-flex justify-center">
        <v-pagination
          v-model="paginacao.pagina"
          density="compact"
          :length="paginacao.totalPaginas"
          :total-visible="paginacao.totalVisivel"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { buscarTodosProdutos } from "@/services/produto-service";
import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao"

import { paginacaoMixin } from "@/mixins/paginacao-mixin"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import ItemGenerico from "@/components/item-generico/item-generico.vue"

export default {
  name: 'page-listagem-produto',

  components: { ItemGenerico, TituloSecao },

  inject: ['setAppLoading', 'emitirNotificacao'],

  mixins: [ paginacaoMixin ],

  methods: {
    buscarProdutos () {
      this.setAppLoading(true)
      buscarTodosProdutos()
        .then(response => {
          this.setAppLoading(false)
          this.listaItens = response.data.produtos.sort((a, b) => b.id - a.id)
          this.paginacao.totalPaginas = this.getTotalDePaginas(this.listaItens.length)
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Falha ao listar produtos. Tente novamente mais tarde.')
        })
    },

    getAcoesDisponiveisProduto () {
      return [{
        nome: 'Editar',
        icon: 'mdi-pencil-outline',
        func: (id) => this.$router.push(`/produto/${id}`)
      }]
    }
  },

  mounted () {
    this.buscarProdutos()
  }
}
</script>

<style lang="scss" scoped>
.list-content {
  height: calc(100vh - 18rem);
}
</style>
