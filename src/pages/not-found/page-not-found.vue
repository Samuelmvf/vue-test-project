<template>
  <section class="bg-background-gradient section-min-height d-flex align-center ">
    <div class="center max-app-size d-flex flex-column align-center gap-2">
      <titulo-secao texto="Error 404" />
      <h1>Página digitada não existe!</h1>
      <v-btn @click="this.$router.push('/')" color="primary">Voltar para página inicial</v-btn>
    </div>
  </section>
</template>

<script>
import TituloSecao from "@/components/titulo-secao/titulo-secao.vue";

export default {
  name: 'page-not-found',
  components: { TituloSecao }
}
</script>
