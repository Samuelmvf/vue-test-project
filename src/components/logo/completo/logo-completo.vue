<template>
  <div class="d-flex align-items-center">
    <logo-img :height="44" />
    <h1 class="ml-2 logo-text user-select-none">SAMSystem</h1>
  </div>
</template>

<script>
import LogoImg from "@/components/logo/img/logo-img.vue";

export default {
  name: 'logo-completo',
  components: { LogoImg }
}
</script>

<style lang="scss" scoped>
.logo-text {
  font-family: $fontTitle;
  font-size: 2.75rem;
  text-transform: uppercase;
}
</style>
