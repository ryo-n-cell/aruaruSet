<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
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
  },
}
</script>
<style scoped>
.transitionTest {
  font-size: 50px;
}
</style>
