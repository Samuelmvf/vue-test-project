<template>
  <v-card
  >
    <v-card-item>
      <div class="row mt-7">
        <sams-input
          :rules="rules['nome']"
          class="mb-2 col-sm-12 col-md-6"
          label="Nome*"
          v-model="cliente.nome"
          v-bind="formularioProps.inputPropsCustomizadas?.nome"
        ></sams-input>

        <sams-input
          :rules="rules['documento']"
          class="mb-2 col-sm-12 col-md-6"
          label="Documento*"
          v-model="cliente.documento"
          v-bind="formularioProps.inputPropsCustomizadas?.documento"
        ></sams-input>

        <sams-input
          :rules="rules['telefone']"
          class="mb-2 col-sm-12 col-md-6"
          label="Telefone*"
          v-model="cliente.telefone"
          :maxlength="13"
          v-bind="formularioProps.inputPropsCustomizadas?.telefone"
        ></sams-input>

        <sams-input
          :rules="rules['email']"
          class="mb-2 col-sm-12 col-md-6"
          label="Email*"
          v-model="cliente.email"
          v-bind="formularioProps.inputPropsCustomizadas?.email"
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
        v-for="(acao, i) in formularioProps.acoes"
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
import SamsInput from "@/components/input/sams-input.vue";
import { rulesRequired, rulesEmail, rulesTelefone } from '@/utils/rules'

export default {
  name: 'form-cliente-content',
  components: { SamsInput },
  props: {
    formularioProps: {
      type: Object,
      required: true
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
      },
      rules: {
        nome: [rulesRequired],
        documento: [rulesRequired],
        telefone: [rulesRequired, rulesTelefone],
        email: [rulesRequired, rulesEmail]
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
      this.cliente.nome = cliente.nome
      this.cliente.documento = cliente.documento
      this.cliente.telefone = cliente.telefone
      this.cliente.email = cliente.email
      this.cliente.ativo = cliente.ativo
    },
  },
  created () {
    this.resetarVueData()
  }
}
</script>
