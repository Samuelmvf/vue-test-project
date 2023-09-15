<template>
  <app-header />
  <router-view></router-view>
  <app-footer />
</template>

<script>
import AppHeader from "@/components/app-header/app-header.vue";
import AppFooter from "@/components/app-footer/app-footer.vue";

export default {
  name: 'App',
  components: { AppHeader , AppFooter },
}
</script>
