<template>
  <v-card
  >
    <v-card-item>
      <div class="row mt-7 justify-center">
        <sams-input
          :rules="rules['nome']"
          class="mb-2 col"
          label="Nome*"
          v-model="produto.nome"
          v-bind="formularioProps.inputPropsCustomizadas?.nome"
        ></sams-input>

        <v-switch
          class="ml-4"
          label="Ativo"
          color="success"
          density="compact"
          hide-details
          v-model="produto.ativo"
        ></v-switch>
      </div>
    </v-card-item>

    <v-card-actions class="form-card-actions">
      <v-btn
        v-for="(acao, i) in formularioProps.acoes"
        :key="acao.nome + i"
        :class="acao.class"
        @click="acao.func(produto)"
      >
        {{ acao.nome }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SamsInput from "@/components/input/sams-input.vue";
import { rulesRequired } from '@/utils/rules'

export default {
  name: 'form-produto-content',
  components: { SamsInput },
  props: {
    formularioProps: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      produto: {
        nome: '',
        ativo: true
      },
      rules: {
        nome: [rulesRequired]
      }
    }
  },
  methods: {
    resetarVueData () {
      this.produto = {
        nome: '',
        ativo: true
      }
    },

    setProduto (produto) {
      this.produto.nome = produto.nome
      this.produto.ativo = produto.ativo
    },
  },
  created () {
    this.resetarVueData()
  }
}
</script>
