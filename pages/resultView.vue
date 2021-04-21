<template>
  <v-row>
    <v-col class="text-center">
      結果
      <v-row class="text-center">
        <v-col cols="6">内容</v-col>
        <v-col cols="6">あなたの答え</v-col>
      </v-row>
      <v-row v-for="item in results" :key="item.id" class="text-center">
        <v-col cols="6">{{ item.content }}</v-col>
        <v-col cols="6">{{ item.result }}</v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <v-card>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="moveTop()"> topに戻る </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  // data() {
  //   return {
  //     resultArray: [],
  //   }
  // },
  computed: {
    results() {
      // return this.$store.getters['choiceResult/result']
      return this.$store.state.choicesResult.result
    },
  },
  methods: {
    moveTop() {
      this.$store.commit('choicesResult/removeResult')
      this.$router.push({ path: '/' })
    },
    ...mapMutations({
      toggle: 'choicesResult/toggle',
    }),
  },
}
</script>
