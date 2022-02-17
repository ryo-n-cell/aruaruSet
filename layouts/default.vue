<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
// import modalDialog from '@/components/modalDaialog'
export default {
  // components: {
  //   modalDialog,
  // },
  data() {
    return {
      pageCount: 1,
      pageCountViwe: [
        {
          pageId: 0,
          pagePath: '/',
        },
        {
          pageId: 1,
          pagePath: '/menu',
        },
        {
          pageId: 2,
          pagePath: '/biomenu',
        },
        {
          pageId: 3,
          pagePath: '/Bio',
        },
        {
          pageId: 4,
          pagePath: '/resultsSoFar',
        },
      ],
      title: 'SORENA',
    }
  },
  computed: {
    transitionComp() {
      this.transitionAction()
      return this.pageCount
    },
  },
  methods: {
    transitionAction() {
      this.$router.push(this.pageCountViwe[this.pageCount].pagePath)
    },
    openDisplay() {
      this.$refs.dlg.isDisplay = true
    },
  },
}
</script>
<style scoped>
.transitionTest {
  font-size: 50px;
}
.topIcon {
  margin-top: 2vh;
  position: absolute;
  z-index: 2;
}
.modalIcon {
  text-align: right;
}
.modalCard {
  height: 100vh;
}
</style>
