<template>
  <div class="center max-app-size py-10 px-4">
    <titulo-secao texto="Associar produto"/>

    <v-card
      class="mt-7"
    >
      <v-card-item class="row">
        <detalhes-entidade
          titulo="Informações do cliente"
          :entidade-atributos="{ nome: cliente.nome, documento: cliente.documento}"
        />

        <v-divider class="my-3" />

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

import { ClienteRepository, ProdutoRepository } from "@/repository"

import { NOTIFICACAO_TIPOS } from "@/contants/constantes-notificacao"

import TituloSecao from "@/components/titulo-secao/titulo-secao.vue"
import DetalhesEntidade from "@/components/detalhes-entidade/detalhes-entidade.vue";
import AssociadorEntidades from "@/components/associador-entidades/associador-entidades.vue"

export default {
  name: 'page-associar-produto',
  components: { AssociadorEntidades, DetalhesEntidade, TituloSecao },
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
      Promise.all([ClienteRepository.buscarPorId(this.$route.params.id), ProdutoRepository.buscarTodos()])
        .then(responses => {
          this.setAppLoading(false)
          this.cliente = responses[0].data.cliente
          this.todosProdutos = responses[1].data.produtos
        })
        .catch(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, 'Falha ao carregar informações de associação de produto, tente novamente mais tarde.')
          this.$router.push('/cliente')
        })

    },

    atualizarAssociacoes (novosProdutos) {
      this.cliente.produtos = []
      this.cliente.produtos = novosProdutos
    },

    salvarAssociacoes () {
      this.setAppLoading(true)
      ClienteRepository.editar(this.cliente.id, this.cliente)
        .then(() => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.SUCESSO, 'Associações com produtos atualizadas com sucesso!')
          this.$router.push('/cliente')
        })
        .catch(({ message }) => {
          this.setAppLoading(false)
          this.emitirNotificacao(NOTIFICACAO_TIPOS.ERRO, message)
        })
    }
  },

  mounted () {
    this.buscarRecursosAssociacaoProdutos()
  }
}
</script>

