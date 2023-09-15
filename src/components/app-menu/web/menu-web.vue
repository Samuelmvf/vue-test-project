<template>
  <div aria-label="Menu" class="d-flex align-items-center gap-1">
    <menu-dropdown
      v-for="subMenu in subMenus"
      :key="subMenu.nome"
      :nome="subMenu.nome"
      :icon="subMenu.icon"
      :actions="subMenu.actions"
      :subtitulo="subMenu.subtitulo"
    />
  </div>
</template>

<script>
import MenuDropdown from "@/components/menu-dropdown/menu-dropdown.vue";

export default {
  name: 'menu-web',
  props: {
    subMenus: {
      type: Array,
      required: true
    }
  },
  components: { MenuDropdown }
}
</script>
