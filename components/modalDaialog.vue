<template>
  <v-overlay
    v-model="isDisplay"
    opacity="0.8"
    fullscreen
    dark
    transition="dialog-bottom-transition"
  >
    <v-row class="mr-5">
      <v-spacer></v-spacer>
      <v-icon large color="white" @click="isDisplay = false"
        >mdi-window-close</v-icon
      >
    </v-row>
    <v-row
      class="ma-15"
      justify="center"
      align="center"
      :key="i"
      @click="transitionAction(modalItem.id)"
      v-for="(modalItem, i) in pageNameArr"
    >
      <h3>{{ modalItem.name }}</h3>
    </v-row>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      isDisplay: false,
      pageNameArr: [
        {
          id: 0,
          name: 'Top',
          pagePath: '/',
        },
        {
          id: 1,
          name: 'メニュー',
          pagePath: '/menu',
        },
        {
          id: 2,
          name: 'プライバシーポリシー',
          pagePath: '/privacyPolicy',
        },
        {
          id: 3,
          name: '作者についてなど',
          pagePath: '/biomenu',
        },
      ],
    }
  },
  methods: {
    transitionAction(i) {
      this.$router.push(this.pageNameArr[i].pagePath)
      this.isDisplay = false
    },
    openPPDisplay() {
      this.$refs.dlg.isPPDisplay = true
    },
  },
}
</script>
