<template>
  <v-overlay
    v-model="isDisplay"
    overlay-opacity="0.5"
    fullscreen
    dark
    transition="dialog-bottom-transition"
  >
    <v-row
      class="ma-0"
      justify="center"
      align="center"
      :key="i"
      @click="transitionAction(modalItem.id)"
      v-for="(modalItem, i) in pageNameArr"
    >
      <h3>{{ modalItem.name }}</h3>
    </v-row>
    <privacyPolicyDaialog ref="dlg"></privacyPolicyDaialog>
  </v-overlay>
</template>

<script>
import privacyPolicyDaialog from '@/components/privacyPolicy'
export default {
  components: {
    privacyPolicyDaialog,
  },
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
          pagePath: '/menu',
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
