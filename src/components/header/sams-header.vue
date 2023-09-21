<template>
  <header class="bg-primary">
    <nav class="px-4 max-app-size d-flex justify-content-between">
      <div class="logo-content" @click="$router.push('/')">
        <logo-img :height="44" v-if="$vuetify.display.xs"/>
        <logo-completo v-else/>
      </div>

      <sams-menu />
    </nav>
  </header>
</template>

<script>
import SamsMenu from "@/components/menu/sams-menu.vue";
import LogoCompleto from "@/components/logo/completo/logo-completo.vue";
import LogoImg from "@/components/logo/img/logo-img.vue";

export default {
  name: 'app-header',
  components: { LogoImg, SamsMenu, LogoCompleto }
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

.logo-content {
  display: flex;
  cursor: pointer;
}
</style>
