<template>
  <header class="bg-primary">
    <nav class="px-4 max-app-size d-flex justify-content-between">
      <logo-completo />
      <menu-web />
    </nav>
  </header>
</template>

<script>
import LogoCompleto from "@/components/logo/completo/logo-completo.vue";
import MenuWeb from "@/components/menu/web/menu-web.vue";

export default {
  name: 'app-header',
  components: { LogoCompleto, MenuWeb },
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
