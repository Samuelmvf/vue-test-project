<template>
  <div class="d-flex align-items-center">
    <logo-img />
    <h1 class="ml-2 text-title user-select-none">SAMSystem</h1>
  </div>
</template>

<script>
import LogoImg from "@/components/logo/img/logo-img.vue";

export default {
  name: 'logo-completo',
  components: { LogoImg }
}
</script>
