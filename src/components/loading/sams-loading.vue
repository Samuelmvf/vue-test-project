<template>
  <v-overlay
    :model-value="isLoading"
    class="align-center justify-center"
  >
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'sams-loading',

  data: () => ({
    isLoading: false,
  }),

  methods: {
    setLoading (loading) {
      this.isLoading = loading
    }
  }
}
</script>
