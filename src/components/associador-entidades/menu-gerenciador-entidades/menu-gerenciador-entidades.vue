<template>
  <div class="d-flex justify-center align-center flex-md-column col-md-2 col-sm-12 gap-2 my-3">
    <v-btn
      v-for="(button, i) in factoryMenu()"
      :key="button.iconXs + i"
      @click="button.acao"
      density="compact"
      :icon="$vuetify.display.xs ? button.iconXs : button.normalIcon"
    />
  </div>
</template>

<script>
const NOME_EVENTO_PAI = 'realizarAcao'

export default {
  name: 'menu-gerenciador-entidades',
  methods: {
    factoryMenu () {
      return [{
        acao: () => this.$emit(NOME_EVENTO_PAI, 'associarSelecionadas'),
        iconXs: 'mdi-chevron-down',
        normalIcon: 'mdi-chevron-right'
      },{
        acao: () => this.$emit(NOME_EVENTO_PAI, 'associarTodas'),
        iconXs: 'mdi-chevron-double-down',
        normalIcon: 'mdi-chevron-double-right'
      },{
        acao: () => this.$emit(NOME_EVENTO_PAI, 'desassociarSelecionadas'),
        iconXs: 'mdi-chevron-up',
        normalIcon: 'mdi-chevron-left'
      },{
        acao: () => this.$emit(NOME_EVENTO_PAI, 'desassociarTodas'),
        iconXs: 'mdi-chevron-double-up',
        normalIcon: 'mdi-chevron-double-left'
      }]
    }
  }
}
</script>
