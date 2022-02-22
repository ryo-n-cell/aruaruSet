<template>
  <v-container fluid pa-0>
    <headerBer :header-title="title" :route-path="routePath"></headerBer>
    <v-row class="text-center resultsList" no-gutters>
      <v-col cols="8">答えた問題</v-col>
      <v-col cols="2"> 回答</v-col>
      <v-col cols="1">あるある割合</v-col>
    </v-row>
    <v-row
      v-for="item in results"
      :key="item.id"
      no-gutters
      class="text-center resultsList"
    >
      <v-col class="resultList" cols="8">{{ item.content }}</v-col>
      <v-col cols="2">{{ item.result }}</v-col>
      <v-col cols="1">{{ item.trueRatio }}%</v-col>
    </v-row>
    <v-row no-gutters class="text-center">
      <v-col cols="12">
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="moveTop()">
            結果を送る <br />
            (メニューへ戻る)
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from 'vuex'
import headerBer from '@/components/headerBer'
export default {
  components: {
    headerBer,
  },
  beforeRouteLeave(to, from, next) {
    next()
    this.$store.commit('choicesResult/removeResult')
  },
  data() {
    return {
      title: '結果',
      routePath: '/menu',
    }
  },
  async fetch({ $axios, store }) {
    const storeResults = store.state.choicesResult.result
    // if (storeResults.length !== 9) {
    //   console.log(this.$refs.dlgToggle)
    //   this.$refs.dlgToggle[0].isDisplay = true
    //   return
    // }
    const anserId = storeResults.map((anserData) => anserData.id)
    const ansersRatio = await $axios.$get(
      `https://aruaruswipeapp.herokuapp.com/resultsSoFar?qId=${anserId[0]}&qId=${anserId[1]}&qId=${anserId[2]}&qId=${anserId[3]}&qId=${anserId[4]}&qId=${anserId[5]}&qId=${anserId[6]}&qId=${anserId[7]}&qId=${anserId[8]}&qId=${anserId[9]}`
    )
    for (let i = 0; i <= 9; i++) {
      storeResults[i].trueRatio = ansersRatio[i].trueRatio
    }
  },

  computed: {
    results() {
      const storeResults = this.$store.state.choicesResult.result
      return storeResults
    },
  },
  methods: {
    moveTop() {
      this.postData()
      this.$router.push({ path: '/menu' })
    },
    postData() {
      const sendData = this.results
      const sendJson = []
      sendData.forEach((resultsData) => {
        let resultsObj = {}
        let statusVar = ''
        if (resultsData.result === 'yup') {
          statusVar = true
        } else if (resultsData.result === 'nope') {
          statusVar = false
        }
        resultsObj = {
          question_id: resultsData.id,
          status: statusVar,
        }
        sendJson.push(resultsObj)
      })
      this.sendPost(sendJson)
    },
    async sendPost(sendJson) {
      const response = await this.$axios
        .$post('https://aruaruswipeapp.herokuapp.com/sendResult', sendJson)
        .catch((err) => {
          return err.response
        })
      return response
    },
    ...mapMutations({
      toggle: 'choicesResult/toggle',
    }),
  },
}
</script>
<style scoped>
.resultsList {
  counter-reset: resultsList;
  list-style-type: none;
  padding: 0;
}
.resultList {
  position: relative;
  margin-bottom: 2vh;
  padding-left: 40px;
  line-height: 30px;
  border: solid 1px #00bcd4;
  border-radius: 0 20px 20px 0;
  transition: 0.3s;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s;
}
</style>
