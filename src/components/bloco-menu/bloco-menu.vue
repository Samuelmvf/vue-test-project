<template>
  <div>
    <v-list-subheader v-if="titulo">{{ titulo }}</v-list-subheader>
    <v-list-item
      v-for="(item, i) in actions"
      :key="i"
      color="primary"
      link
      @click="item.acao"
    >
      <template v-slot:prepend v-if="item.icon">
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.nome"></v-list-item-title>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'bloco-menu',
  props: {
    titulo: {
      type: String,
      required: false
    },
    actions: {
      type: Array,
      required: true
    }
  }
}
</script>
