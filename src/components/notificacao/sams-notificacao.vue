<template>
  <v-snackbar
    max-height="60"
    v-model="notificacao.ativa"
    :color="notificacao.color"
    :timeout="notificacao.timeout"
    @update:modelValue="limparNotificacao"
  >
    {{ notificacao.mensagem }}
  </v-snackbar>
</template>

<script>
import {
  NOTIFICACAO_PADRAO,
  DELAY_SAIDA_ANIMACAO_NOTIFICACAO,
  NOTIFICACAO_CORES
} from "@/contants/constantes-notificacao";

export default {
  name: 'sams-notificacao',

  data: () => ({
    notificacao: {
      ativa: false,
      mensagem: '',
      color: NOTIFICACAO_PADRAO.COR,
      timeout: NOTIFICACAO_PADRAO.TIMEOUT,
    }
  }),

  methods: {
    limparNotificacao () {
      if (!this.notificacao.ativa) {
        setTimeout(() => {
          this.resetarNotificacao()
        }, DELAY_SAIDA_ANIMACAO_NOTIFICACAO)
      }
    },

    resetarNotificacao () {
      this.notificacao.ativa = false
      this.notificacao.mensagem = ''
      this.notificacao.color = ''
      this.notificacao.timeout = NOTIFICACAO_PADRAO.TIMEOUT
    },

    emitirNotificacao (tipo, message, timeout) {
      this.notificacao.ativa = true
      this.notificacao.mensagem = message
      this.notificacao.color = NOTIFICACAO_CORES[tipo] || NOTIFICACAO_PADRAO.COR
      this.notificacao.timeout = timeout || NOTIFICACAO_PADRAO.TIMEOUT
    }
  }
}
</script>
