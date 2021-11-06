<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer>
      <span>&copy; Ryota Nakamura {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'SORENA',
    }
  },
}
</script>
