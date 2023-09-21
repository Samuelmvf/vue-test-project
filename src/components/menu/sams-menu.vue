<template>
  <menu-mobile v-if="$vuetify.display.xs" :sub-menus="subMenus"/>
  <menu-web v-else :sub-menus="subMenus"/>
</template>

<script>
import MenuWeb from "@/components/menu/web/menu-web.vue";
import MenuMobile from "@/components/menu/mobile/menu-mobile.vue";

export default {
  name: 'app-menu',

  components: { MenuWeb, MenuMobile },

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
              acao: () => this.$router.push('/cliente/cadastrar')
            }, {
              nome: 'Listar',
              icon: 'mdi-text-box-outline',
              acao: () => this.$router.push('/cliente')
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
              acao: () => this.$router.push('/produto/cadastrar')
            }, {
              nome: 'Listar',
              icon: 'mdi-text-box-outline',
              acao: () => this.$router.push('/produto')
            }
          ],
          subtitulo: 'Serviços'
        }
      ]
    }
  },
}
</script>
