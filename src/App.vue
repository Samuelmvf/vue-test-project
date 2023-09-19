<template>
  <sams-header />
  <router-view></router-view>
  <sams-loading ref="loadingApp"></sams-loading>
  <sams-notificacao ref="notificacaoApp"></sams-notificacao>
  <sams-footer />
</template>

<script>
import SamsHeader from "@/components/header/sams-header.vue";
import SamsFooter from "@/components/footer/sams-footer.vue";
import SamsLoading from "@/components/loading/sams-loading.vue";
import SamsNotificacao from "@/components/notificacao/sams-notificacao.vue";


export default {
  name: 'App',
  components: { SamsHeader, SamsLoading, SamsNotificacao, SamsFooter },

  provide () {
    return {
      emitirNotificacao: this.emitirNotificacao,
      setAppLoading: this.setAppLoading
    }
  },

  methods: {
    emitirNotificacao (tipo, mensagem, timeout) {
      this.$refs.notificacaoApp.emitirNotificacao(tipo, mensagem, timeout)
    },

    setAppLoading (loading) {
      this.$refs.loadingApp.setLoading(loading)
    }
  }

}
</script>
