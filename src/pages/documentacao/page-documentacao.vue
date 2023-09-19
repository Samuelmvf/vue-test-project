<template>
  <section class="bg-background-gradient section-min-height d-flex align-center">
    <div class="center max-app-size d-flex flex-column align-center gap-2">
      <titulo-secao texto="Desafio técnico" />
    </div>
  </section>
</template>

<script>
import TituloSecao from "@/components/titulo-secao/titulo-secao.vue";

export default {
  name: 'page-documentacao',
  components: { TituloSecao }
}
</script>
