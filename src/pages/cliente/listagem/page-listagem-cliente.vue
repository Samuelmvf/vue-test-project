<template>
  <div class="center max-app-size py-10 px-4 fill-height">
    <titulo-secao texto="Listagem de clientes"/>

    <v-card class="mt-4 list-content">
      <v-list class="form-card-content pt-4">
        <item-generico
          v-for="(cliente, index) in dadosPaginaAtual"
          :key="cliente.id"
          :id="cliente.id"
          :ativo="cliente.ativo"
          :nome="cliente.nome"
          :propriedades-descritas="clonarFiltrarPropriedades(['id','nome', 'produtos', 'ativo'], cliente)"
          :border-bottom="index < dadosPaginaAtual.length - 1"
          :acoes="getAcoesDisponiveisCliente()"
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
import { ClienteRepository } from "@/repository"
import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao"

import { paginacaoMixin } from "@/mixins/paginacao-mixin"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import ItemGenerico from "@/components/item-generico/item-generico.vue"

export default {
  name: 'page-listagem-cliente',

  components: { ItemGenerico, TituloSecao },

  inject: ['setAppLoading', 'emitirNotificacao'],

  mixins: [ paginacaoMixin ],

  methods: {
    buscarClientes () {
      this.setAppLoading(true)
      ClienteRepository.buscarTodos()
        .then(response => {
          this.setAppLoading(false)
          this.listaItens = response.data.clientes.sort((a, b) => b.id - a.id)
          this.paginacao.totalPaginas = this.getTotalDePaginas(this.listaItens.length)
        })
        .catch(({ message }) => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, message)
        })
    },

    getAcoesDisponiveisCliente () {
      return [{
        nome: 'Editar',
        icon: 'mdi-pencil-outline',
        func: (id) => this.$router.push(`/cliente/${id}`)
      }, {
        nome: 'Associar produto',
        icon: 'mdi-link-box-variant',
        func: (id) => this.$router.push(`/cliente/${id}/associar-produto`)
      }]
    }
  },

  mounted () {
    this.buscarClientes()
  }
}
</script>

<style lang="scss" scoped>
.list-content {
  height: calc(100vh - 18rem);
}
</style>
