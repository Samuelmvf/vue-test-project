<template>
  <!-- TODO implementar um componente de notificação que permite multiplas notificações -->
  <v-snackbar
    max-height="60"
    v-model="computedNotification.ativa"
    v-bind="computedNotification.propriedades"
    @update:modelValue="limparNotificacao"
  >
    {{ computedNotification.mensagem }}
  </v-snackbar>
</template>

<script>
export default {
  name: 'sams-notificacao',
  props: {
    notificacao: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedNotification () {
      return this.notificacao
    }
  },
  methods: {
    limparNotificacao (val) {
      console.log(val)
      if (!this.computedNotification.ativa)
        this.$emit('resetNotification')
    }
  }
}
</script>
