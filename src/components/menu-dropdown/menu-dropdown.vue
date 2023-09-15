<template>
  <v-menu
    open-on-hover
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        :prepend-icon="icon ? icon : ''"
      >
        {{ nome }}
      </v-btn>
    </template>

    <v-list density="compact">
      <v-list-subheader v-if="subtitulo">{{ subtitulo }}</v-list-subheader>

      <v-list-item
        v-for="(item, i) in actions"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.nome"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'menu-dropdown',
  props: {
    nome: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    actions: {
      type: Array,
      required: true
    },
    subtitulo: {
      type: String,
      required: false
    }
  }
}
</script>
