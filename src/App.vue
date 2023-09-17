<template>
  <sams-header />
  <router-view></router-view>
  <sams-footer />
</template>

<script>
import SamsHeader from "@/components/header/sams-header.vue";
import SamsFooter from "@/components/footer/sams-footer.vue";


export default {
  name: 'App',
  components: { SamsHeader , SamsFooter },
}
</script>
