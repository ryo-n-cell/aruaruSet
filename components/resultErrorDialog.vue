<template>
  <v-overlay
    v-model="isDisplay"
    opacity="0.8"
    fullscreen
    dark
    transition="dialog-bottom-transition"
  >
    <v-row class="mr-5">
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </v-row>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      isDisplay: false,
    }
  },
  methods: {},
}
</script>
