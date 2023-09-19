<template>
  <v-card variant="elevated" class="col-md-5 col-sm-12">
    <v-list-subheader class="justify-center font-weight-black mt-3">{{ titulo }}</v-list-subheader>
    <v-divider></v-divider>
    <v-list class="mb-4" select-strategy="classic" :max-height="300">
      <v-list-item
        v-for="entidade in entidades"
        :key="entidade.id"
        :value="entidade.id"
        @click="handleCheckboxChange(entidade.id)"
        :active="entidadesSelecionadas[entidade.id]"
      >
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="entidadesSelecionadas[entidade.id]"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title>{{ entidade.nome }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default  {
  name: 'bloco-entidades',
  props: {
    titulo: {
      type: String,
      required: true
    },
    entidades: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    entidadesSelecionadas: {},
  }),

  methods: {
    montarObjetoSelecionadas (novasEntidades) {
      this.entidadesSelecionadas = {}

      novasEntidades.forEach((entidade) => {
        this.entidadesSelecionadas[entidade.id] = false
      });
    },

    handleCheckboxChange (entidadeId) {
      this.entidadesSelecionadas[entidadeId] = !this.entidadesSelecionadas[entidadeId];
    },

    getEntidadesSelecionadas () {
      return Object.entries(this.entidadesSelecionadas).reduce((acc, [key, value]) => {
        if (value) {
          acc.push(this.entidades.find(entidade => entidade.id === key))
        }
        return acc;
      }, [])
    },

    getIdsEntidadesSelecionadas () {
      return Object.entries(this.entidadesSelecionadas).reduce((acc, [key, value]) => {
        if (value) {
          acc.push(key)
        }
        return acc;
      }, [])
    }

  },

  watch: {
    entidades: {
      deep: true,
      immediate: true,
      handler (novasEntidades) {
        this.montarObjetoSelecionadas(novasEntidades)
        console.log(this.titulo, this.entidadesSelecionadas)
      }
    }
  }
}
</script>
