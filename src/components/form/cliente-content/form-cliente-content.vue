<template>
  <v-card
  >
    <v-card-item>
      <div class="row mt-7">
        <sams-input
          :rules="[validadores.validar('nome', cliente.nome)]"
          class="mb-2 col-sm-12 col-md-6"
          label="Nome*"
          v-model="cliente.nome"
          v-bind="customizacoesInputs?.nome"
        ></sams-input>

        <sams-input
          :rules="[validadores.validar('documento', cliente.documento)]"
          class="mb-2 col-sm-12 col-md-6"
          label="Documento*"
          v-model="cliente.documento"
          v-bind="customizacoesInputs?.documento"
        ></sams-input>

        <sams-input
          :rules="[validadores.validar('telefone', cliente.telefone)]"
          class="mb-2 col-sm-12 col-md-6"
          label="Telefone*"
          v-model="cliente.telefone"
          type="number"
          v-bind="customizacoesInputs?.telefone"
        ></sams-input>

        <sams-input
          :rules="[validadores.validar('email', cliente.email)]"
          class="mb-2 col-sm-12 col-md-6"
          label="Email*"
          v-model="cliente.email"
          v-bind="customizacoesInputs?.email"
        ></sams-input>

        <v-switch
          class="ml-2"
          label="Ativo"
          color="success"
          density="compact"
          hide-details
          v-model="cliente.ativo"
        ></v-switch>
      </div>
    </v-card-item>

    <v-card-actions class="form-card-actions">
      <v-btn
        v-for="(acao, i) in acoesFormulario"
        :key="acao.nome + i"
        :class="acao.class"
        @click="acao.func(cliente)"
      >
        {{ acao.nome }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SamsInput from "@/components/input/sams-input.vue"

export default {
  name: 'form-cliente-content',
  components: { SamsInput },

  props: {
    acoesFormulario: {
      type: Array,
      required: true
    },
    validadores: {
      required: false
    },
    customizacoesInputs: {
      type: Object,
      required: false
    }
  },

  data () {
    return {
      cliente: {
        nome: '',
        documento: '',
        telefone: '',
        email: '',
        ativo: true
      }
    }
  },

  methods: {
    resetarVueData () {
      this.cliente = {
        nome: '',
        documento: '',
        telefone: '',
        email: '',
        ativo: true
      }
    },

    setCliente (cliente) {
      this.cliente = cliente
    },
  },

  created () {
    this.resetarVueData()
  }
}
</script>
