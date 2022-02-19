<template>
  <v-app id="allPage">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    const vh = window.innerHeight
    document.getElementById('allPage').style.height = vh + 'px'
  },
}
</script>
