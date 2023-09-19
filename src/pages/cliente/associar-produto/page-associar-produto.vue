<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Associar produto"/>
    <v-card
      class="mt-7"
    >
      <v-card-item class="row">
        <card-detalhes-cliente :nome="cliente.nome" :documento="cliente.documento" />
        <v-divider class="my-3"></v-divider>
        <associador-entidades
          v-if="todosProdutos.length"
          :entidadadesAssociadas="cliente.produtos"
          :entidadesDisponiveis="produtosDisponiveis"
          class="col row ma-4"
          @atualizarAssociacoes="atualizarAssociacoes"
        />
      </v-card-item>

      <v-card-actions class="form-card-actions">
        <v-btn @click="salvarAssociacoes" variant="elevated" color="success">Salvar produtos associados</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import { buscarClientePorId, editarCliente } from "@/services/cliente-service"
import { buscarTodosProdutos } from "@/services/produto-service"

import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import CardDetalhesCliente from "@/components/card-detalhes-cliente/card-detalhes-cliente.vue"
import AssociadorEntidades from "@/components/associador-entidades/associador-entidades.vue"

export default {
  name: 'page-associar-produto',
  components: { AssociadorEntidades, CardDetalhesCliente, TituloSecao },
  inject: ['setAppLoading', 'emitirNotificacao'],

  data: () => ({
    cliente: {
      nome: '',
      documento: '',
      produtos: []
    },
    todosProdutos: []
  }),

  computed: {
    produtosDisponiveis () {
      return this.todosProdutos.filter(({ id }) => !this.cliente.produtos.some(cliente => cliente.id === id))
    }
  },

  methods: {
    buscarRecursosAssociacaoProdutos () {
      this.setAppLoading(true)
      Promise.all([buscarClientePorId(this.$route.params.id), buscarTodosProdutos()])
        .then(responses => {
          this.setAppLoading(false)
          this.cliente = responses[0].data.cliente
          this.todosProdutos = responses[1].data.produtos
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Falha ao carregar informações de associção de produto, tente novamente mais tarde.')
          this.$router.push('/cliente')
        })

    },

    atualizarAssociacoes (novosProdutos) {
      this.cliente.produtos = []
      this.cliente.produtos = novosProdutos
    },

    salvarAssociacoes () {
      this.setAppLoading(true)
      editarCliente(this.cliente)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Associações com produtos atualizadas com sucesso!')
          this.$router.push('/cliente')
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Falha ao atualizar associações, tente novamente mais tarde!')
        })
    }
  },

  mounted () {
    this.buscarRecursosAssociacaoProdutos()
  }
}
</script>

