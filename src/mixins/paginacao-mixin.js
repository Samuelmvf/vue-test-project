import { clonarFiltrarPropriedades } from "@/utils/util"

export const paginacaoMixin = {
  data: () => ({
    listaItens: [],
    paginacao: {
      itemsPorPagina: 6,
      pagina: 1,
      totalPaginas: 1,
      totalVisivel: 3
    }
  }),

  computed: {
    dadosPaginaAtual () {
      const indexInicial = (this.paginacao.pagina  - 1) * this.paginacao.itemsPorPagina
      const indexFinal = indexInicial + this.paginacao.itemsPorPagina
      return this.listaItens.filter((_, index) => index >= indexInicial && index < indexFinal)
    }
  },

  methods: {
    clonarFiltrarPropriedades,
    getTotalDePaginas (quantidadeClientes = 1) {
      const pages = quantidadeClientes/this.paginacao.itemsPorPagina
      if (!Number.isInteger(pages)) {
        return parseInt(pages) + 1
      }

      return pages
    },
  }
}
