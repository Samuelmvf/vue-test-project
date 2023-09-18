<template>
  <sams-header />
  <router-view></router-view>
  <sams-loading ref="loadingApp"></sams-loading>
  <sams-notificacao v-if="notificacao.ativa" :notificacao="notificacao" @resetNotification="resetNotification"></sams-notificacao>
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

  data: () => ({
    notificacao: {
      ativa: false,
      mensagem: '',
      propriedades: {}
    }
  }),

  methods: {
    setAppLoading(loading) {
      this.$refs.loadingApp.setLoading(loading)
    },

    emitirNotificacao({ mensagem, propriedades }) {
      this.notificacao.ativa = true
      this.notificacao.mensagem = mensagem
      this.notificacao.propriedades = propriedades
    },

    resetNotification () {
      this.notificacao.ativa = false
      this.notificacao.mensagem = ''
      this.notificacao.propriedades = {}
    }
  }

}
</script>
