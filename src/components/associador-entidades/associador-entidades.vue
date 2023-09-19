<template>
  <div v-bind="$attrs">
    <bloco-entidades ref="blocoEntidade" titulo="Produtos disponíveis" :entidades="entidadesDisponiveis" />
    <menu-gerenciador-entidades
      @realizarAcao="realizarAcao"
    />
    <bloco-entidades ref="blocoAssociadas" titulo="Produtos associados" :entidades="entidadadesAssociadas" />
  </div>
</template>
<script>
import BlocoEntidades from "@/components/associador-entidades/bloco-entidades/bloco-entidades.vue"
import MenuGerenciadorEntidades
  from "@/components/associador-entidades/menu-gerenciador-entidades/menu-gerenciador-entidades.vue"

export default {
  name: 'associador-entidades',
  components: { MenuGerenciadorEntidades, BlocoEntidades },
  props: {
    entidadadesAssociadas: {
      type: Array,
      required: true
    },
    entidadesDisponiveis: {
      type: Array,
      required: true
    }
  },
  inheritAttrs: true,

  data: () => ({
    tiposAssociacao: {}
  }),

  methods: {
    realizarAcao (tipo) {
      this.tiposAssociacao[tipo]()
    },

    factoryTiposAssociacao () {
      return {
        associarSelecionadas: () => {
          const listaAtualizada = [
            ...this.entidadadesAssociadas,
            ...this.$refs.blocoEntidade.getEntidadesSelecionadas()
          ]
          this.$emit('atualizarAssociacoes', listaAtualizada)
        },
        associarTodas: () => {
          const listaAtualizada = [
            ...this.entidadadesAssociadas,
            ...this.entidadesDisponiveis
          ]
          this.$emit('atualizarAssociacoes', listaAtualizada)
        },
        desassociarSelecionadas: () => {
          const idsEntidadesARemover = this.$refs.blocoAssociadas.getIdsEntidadesSelecionadas()
          const listaAtualizada = [
            ...this.entidadadesAssociadas.filter(({ id }) => !idsEntidadesARemover.includes(id))
          ]
          this.$emit('atualizarAssociacoes', listaAtualizada)
        },
        desassociarTodas: () => {
          this.$emit('atualizarAssociacoes', [])
        }
      }
    }
  },

  mounted () {
    this.tiposAssociacao = this.factoryTiposAssociacao()
  }
}
</script>
