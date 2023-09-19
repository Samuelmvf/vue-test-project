<template>
  <div class="d-flex justify-center align-center flex-md-column col-md-2 col-sm-12 gap-2 my-3">
    <v-btn @click="$emit('realizarAcao', 'associarSelecionadas')" density="compact" :icon="$vuetify.display.xs ? 'mdi-chevron-down' : 'mdi-chevron-right'" />
    <v-btn @click="$emit('realizarAcao', 'associarTodas')" density="compact" :icon="$vuetify.display.xs ? 'mdi-chevron-double-down' : 'mdi-chevron-double-right'" />
    <v-btn @click="$emit('realizarAcao', 'desassociarSelecionadas')" density="compact" :icon="$vuetify.display.xs ? 'mdi-chevron-up' : 'mdi-chevron-left'" />
    <v-btn @click="$emit('realizarAcao', 'desassociarTodas')" density="compact" :icon="$vuetify.display.xs ? 'mdi-chevron-double-up' : 'mdi-chevron-double-left'" />
  </div>
</template>

<script>

export default {
  name: 'menu-gerenciador-entidades'
}
</script>
