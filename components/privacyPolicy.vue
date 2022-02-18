<template>
  <v-overlay
    v-model="isPPDisplay"
    overlay-opacity="0.5"
    fullscreen
    dark
    transition="dialog-bottom-transition"
  >
    <v-row :key="i" class="ma-0" justify="center" align="center">
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </v-row>
  </v-overlay>
</template>
<script>
export default {
  data() {
    return {
      isPPDisplay: false,
    }
  },
  methods: {
    transitionAction(i) {
      this.$router.push(this.pageNameArr[i].pagePath)
      this.isDisplay = false
    },
  },
}
</script>
