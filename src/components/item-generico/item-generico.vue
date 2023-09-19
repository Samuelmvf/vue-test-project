<template>
  <v-list-item
    color="primary"
    class="generic-item"
  >
    <v-list-item-title>
      <div class="container-fluid d-flex justify-content-between">
        <div class="d-flex justify-center align-items-center item-title">
          <v-tooltip
            :content-class="ativo ? 'bg-success' : ''"
            location="top"
            :text="ativo ? 'Ativo' : 'Inativo'"
          >
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                :color="ativo ? 'success' : ''"
                :icon="ativo ? 'mdi-check-circle' : 'mdi-checkbox-blank-circle-outline'"
              />
            </template>
          </v-tooltip>
          <span class="ml-2">{{ nome }}</span>
        </div>
        <div aria-label="Ações">
          <v-tooltip
            v-for="(acao, index) in acoes"
            :key="acao.nome + index"
            location="top"
            :text="acao.nome"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                :class="`${ index < acoes.length - 1 ? 'mr-2 ' : ''}text-primary-emphasis`"
                density="compact"
                :icon="acao.icon"
                flat
                @click="acao.func(id)"
              />
            </template>
          </v-tooltip>
        </div>
      </div>
    </v-list-item-title>
    <v-list-item-subtitle class="container-fluid">
      <v-chip
        v-for="([key, value], index) in Object.entries(propriedadesDescritas)"
        :key="value + index"
        class="mr-2"
        density="comfortable"
      >
        <span class="text-capitalize">{{ key }}:&nbsp;</span>{{ value }}
      </v-chip>
    </v-list-item-subtitle>
    <v-divider class="my-3" v-if="borderBottom"></v-divider>
  </v-list-item>
</template>

<script>
export default {
  name: 'item-generico',
  props: {
    id: {
      required: true
    },
    ativo: {
      type: Boolean,
      required: false
    },
    nome: {
      type: String,
      required: true
    },
    propriedadesDescritas: {
      type: Object,
      required: true
    },
    borderBottom: {
      type: Boolean,
      required: false
    },
    acoes: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.item-title {
  font-weight: 500;
}
</style>
