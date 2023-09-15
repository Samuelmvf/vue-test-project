<template>
  <header class="bg-primary">
    <nav class="px-4 max-app-size d-flex justify-content-between">
      <logo-img :height="44" v-if="isMobileView" />
      <logo-completo v-else/>
      <app-menu />
    </nav>
  </header>
</template>

<script>
import { useDisplay } from "vuetify";
import AppMenu from "@/components/app-menu/app-menu.vue";
import LogoCompleto from "@/components/logo/completo/logo-completo.vue";
import LogoImg from "@/components/logo/img/logo-img.vue";

export default {
  name: 'app-header',
  components: {LogoImg, AppMenu, LogoCompleto },
  computed: {
    isMobileView () {
      const { xs } = useDisplay()
      return xs.value
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 4rem;
  padding: .625rem 0;

  nav {
    height: 100%;
    margin: 0 auto;
  }
}
</style>
