<template>
  <menu-mobile v-if="isMobileView" :sub-menus="subMenus"/>
  <menu-web v-else :sub-menus="subMenus"/>
</template>

<script>
import { useDisplay } from "vuetify";

import MenuWeb from "@/components/app-menu/web/menu-web.vue";
import MenuMobile from "@/components/app-menu/mobile/menu-mobile.vue";

export default {
  name: 'app-menu',
  components: { MenuWeb, MenuMobile },
  data () {
    return {
      subMenus: this.factorySubMenus()
    }
  },
  computed: {
    isMobileView () {
      const { xs } = useDisplay()
      return xs.value
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
  },
}
</script>
