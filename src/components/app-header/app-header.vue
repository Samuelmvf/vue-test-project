<template>
  <header class="bg-primary">
    <nav class="px-4 max-app-size d-flex justify-content-between">
      <logo-completo />
      <app-menu />
    </nav>
  </header>
</template>

<script>
import AppMenu from "@/components/app-menu/app-menu.vue";
import LogoCompleto from "@/components/logo/completo/logo-completo.vue";

export default {
  name: 'app-header',
  components: { AppMenu, LogoCompleto },
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 4.625rem;
  padding: .625rem 0;

  nav {
    height: 100%;
    margin: 0 auto;
  }
}
</style>
