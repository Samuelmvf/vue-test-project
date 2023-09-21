<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        icon="mdi-menu"
      />
    </template>

    <v-list density="compact">
      <bloco-menu
        v-for="(subMenu, i) in subMenus"
        :key="subMenu.nome + i"
        :titulo="subMenu.nome"
        :actions="subMenu.actions"
      />
    </v-list>
  </v-menu>
</template>

<script>
import BlocoMenu from "@/components/bloco-menu/bloco-menu.vue";

export default {
  name: 'menu-mobile',

  props: {
    subMenus: {
      type: Array,
      required: true
    }
  },

  components: { BlocoMenu }
}
</script>
