<template>
  <div class="d-flex position-relative box-titulo">
    <span class="bg-primary-subtle pa-3 position-absolute">///</span>
    <h1>{{ texto }}</h1>
  </div>
</template>

<script>
export default {
  name: 'titulo-secao',

  props: {
    texto: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.box-titulo {
  span {
    z-index: 1;
    border-radius: 0.35rem;
    user-select: none;
  }

  h1 {
    font-family: $fontTitle;
    font-size: 2.5rem;
    text-transform: uppercase;
    z-index: 2;
    margin: .8rem 0 0 1rem;
  }
}
</style>
