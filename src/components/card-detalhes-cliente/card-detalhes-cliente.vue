<template>
  <div class="col-12" >
    <h1>INFORMAÇÕES DO CLIENTE</h1>
    <v-card class="pa-4 mx-3 mt-2">
      <p><span class="font-weight-medium text-client-attributes">Nome: </span>{{ nome }}</p>
      <p><span class="font-weight-medium text-client-attributes">Documento: </span>{{ documento }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'card-detalhes-cliente',
  props: {
    nome: {
      type: String,
      required: true
    },
    documento: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-family: $fontTitle;
  font-size: 2rem;
  text-transform: uppercase;
}

.text-client-attributes {
  font-family: $fontTitle;
  text-transform: uppercase;
}
</style>
