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
import { EVT_ATUALIZAR_ASSOCIACAO, TIPOS_ASSOCIACAO} from "@/contants/constantes-associacao-entidades";

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
      const acaoEmitida = this.tiposAssociacao[tipo]
      acaoEmitida()
    },

    factoryTiposAssociacao () {
      const tiposAssociacao = {}

      tiposAssociacao[TIPOS_ASSOCIACAO.ASSOCIAR_SELECIONADAS] = () => {
        const listaAtualizada = [
          ...this.entidadadesAssociadas,
          ...this.$refs.blocoEntidade.getEntidadesSelecionadas()
        ]
        this.$emit(EVT_ATUALIZAR_ASSOCIACAO, listaAtualizada)
      }

      tiposAssociacao[TIPOS_ASSOCIACAO.ASSOCIAR_TODAS] = () => {
        const listaAtualizada = [
          ...this.entidadadesAssociadas,
          ...this.entidadesDisponiveis
        ]
        this.$emit(EVT_ATUALIZAR_ASSOCIACAO, listaAtualizada)
      }

      tiposAssociacao[TIPOS_ASSOCIACAO.DESASSOCIAR_SELECIONADAS] = () => {
        const idsEntidadesARemover = this.$refs.blocoAssociadas.getIdsEntidadesSelecionadas()
        const listaAtualizada = [
          ...this.entidadadesAssociadas.filter(({ id }) => !idsEntidadesARemover.includes(id))
        ]
        this.$emit(EVT_ATUALIZAR_ASSOCIACAO, listaAtualizada)
      }

      tiposAssociacao[TIPOS_ASSOCIACAO.DESASSOCIAR_TODAS] = () => {
        this.$emit(EVT_ATUALIZAR_ASSOCIACAO, [])
      }

      return tiposAssociacao
    }
  },

  mounted () {
    this.tiposAssociacao = this.factoryTiposAssociacao()
  }
}
</script>
