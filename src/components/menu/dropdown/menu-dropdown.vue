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
      <bloco-menu :titulo="subtitulo" :actions="actions" />
    </v-list>
  </v-menu>
</template>

<script>
import BlocoMenu from "@/components/bloco-menu/bloco-menu.vue";

export default {
  name: 'menu-dropdown',
  components: { BlocoMenu },
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
