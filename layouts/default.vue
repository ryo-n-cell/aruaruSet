<template>
  <v-app>
    <v-main>
      <a class="transitionTest"> 上</a>
      <Nuxt />
      <a class="transitionTest"> 下</a>
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
          pageId: 1,
          pagePath: '/',
        },
        {
          pageId: 2,
          pagePath: '/topPage/whatApp',
        },
        {
          pageId: 3,
          pagePath: '/topPage/howTo',
        },
        {
          pageId: 4,
          pagePath: '/topPage/menu',
        },
        {
          pageId: 5,
          pagePath: '/topPage/bio',
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
      if (this.pageCount === 1) {
        this.$router.push('/')
      } else if (this.pageCount === 2) {
        this.$router.push('/topPage/whatApp')
      } else if (this.pageCount === 3) {
        this.$router.push('/topPage/howTo')
      } else if (this.pageCount === 4) {
        this.$router.push('/topPage/menu')
      } else if (this.pageCount === 5) {
        this.$router.push('/topPage/bio')
      }
    },
  },
}
</script>
<style scoped>
.transitionTest {
  font-size: 50px;
}
</style>
