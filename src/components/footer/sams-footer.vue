<template>
  <footer class="bg-primary d-flex justify-center align-center">
    <h4>© 2023 Samuel Maia - @samuelmvf</h4>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
}
</script>

<style lang="scss" scoped>
footer {
  height: 4rem;
  padding: .625rem 0;

  h4 {
    font-family: $fontTitle;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
</style>
