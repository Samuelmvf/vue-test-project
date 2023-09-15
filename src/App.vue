<template>
  <app-header />
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/app-header/app-header.vue";

export default {
  name: 'App',
  components: { AppHeader },
}
</script>
