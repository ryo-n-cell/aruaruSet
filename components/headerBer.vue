<template>
  <v-app-bar color="deep-purple accent-4">
    <v-icon color="white" @click="returnEvent">mdi-arrow-left</v-icon>
    <v-toolbar-title class="titleName">{{ headerTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon color="white">mdi-dots-vertical</v-icon>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      title: '',
    }
  },
  methods: {
    // ルート遷移機能が密結合になっているので後々$routeをpropsで渡すようにしたい。
    // https://qiita.com/morrr/items/873ea25a806167c8d426#route-%E3%82%92props%E3%81%A7%E6%B8%A1%E3%81%99
    returnEvent() {
      if (this.headerTitle === 'メニュー') {
        this.$router.push('/')
      } else if (this.headerTitle === '作者についてなど') {
        this.$router.push('/menu')
      } else if (this.headerTitle === '作者プロフィール') {
        this.$router.push('/biomenu')
      }
      console.log('作者プロフィール')
    },
  },
}
</script>
<style scoped>
.titleName {
  color: white;
  margin-left: 2vw;
}
</style>
