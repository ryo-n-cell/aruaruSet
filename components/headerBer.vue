<template>
  <div>
    <v-app-bar color="deep-purple accent-4">
      <v-icon color="white" @click="returnEvent">mdi-arrow-left</v-icon>
      <v-toolbar-title class="titleName">{{ headerTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="white" @click="modalToggle">mdi-dots-vertical</v-icon>
    </v-app-bar>
    <modalDaialog ref="dlgToggle"></modalDaialog>
  </div>
</template>

<script>
import modalDaialog from '@/components/modalDaialog'
export default {
  components: {
    modalDaialog,
  },
  props: {
    headerTitle: {
      type: String,
      default: '',
      required: true,
    },
    routePath: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    returnEvent() {
      this.$router.push(this.routePath)
    },

    modalToggle() {
      this.$refs.dlgToggle.isDisplay = true
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
