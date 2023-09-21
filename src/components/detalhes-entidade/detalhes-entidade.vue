<template>
  <div class="col-12">
    <h1 class="ml-4 text-uppercase-title">{{ titulo }}</h1>
    <v-card class="pa-4 mx-3 mt-2 bg-grey-lighten-4">
      <p
        v-for="([key, value]) in Object.entries(entidadeAtributos)"
        :key="key"
      >
        <span class="font-weight-medium text-uppercase-title">
          {{ key }}:
        </span>
        {{ value }}
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'detalhes-entidade',
  props: {
    titulo: {
      type: String,
      required: true
    },
    entidadeAtributos: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.text-uppercase-title {
  font-family: $fontTitle;
  text-transform: uppercase;
}

h1 {
  font-size: 2rem;
}
</style>
