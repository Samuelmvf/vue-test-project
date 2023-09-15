<template>
  <div class="d-flex align-items-center gap-1">
    <menu-dropdown
      v-for="subMenu in subMenus"
      :key="subMenu.nome"
      :nome="subMenu.nome"
      :icon="subMenu.icon"
      :actions="subMenu.actions"
      :subtitulo="subMenu.subtitulo"
    />
  </div>
</template>

<script>
import MenuDropdown from "@/components/menu-dropdown/menu-dropdown.vue";

export default {
  name: 'menu-web',
  components: { MenuDropdown },
  data () {
    return {
      subMenus: this.factorySubMenus()
    }
  },
  methods: {
    factorySubMenus ()  {
      return [
        {
          nome: 'Clientes',
          icon: 'mdi-account',
          actions: [
            {
              nome: 'Cadastrar',
              icon: 'mdi-account-plus',
              acao: () => {
              }
            }, {
              nome: 'Listar',
              icon: 'mdi-text-box-outline',
              acao: () => {
              }
            }, {
              nome: 'Associar produto',
              icon: 'mdi-link-box-variant',
              acao: () => {
              }
            }
          ],
          subtitulo: 'Serviços'
        }, {
          nome: 'Produtos',
          icon: 'mdi-archive',
          actions: [
            {
              nome: 'Cadastrar',
              icon: 'mdi-archive-plus',
              acao: () => {
              }
            }, {
              nome: 'Listar',
              icon: 'mdi-text-box-outline',
              acao: () => {
              }
            }
          ],
          subtitulo: 'Serviços'
        }
      ]
    }
  }
}
</script>
