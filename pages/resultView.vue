<template>
  <div>
    <v-subheader> 結果 </v-subheader>
    <v-row class="text-center resultsList">
      <v-col cols="9">答えた問題</v-col>
      <v-col cols="2"> 回答</v-col>
      <v-col cols="1">yep割合</v-col>
    </v-row>
    <v-row
      v-for="item in results"
      :key="item.id"
      no-gutters
      class="text-center resultsList"
    >
      <v-col class="resultList" cols="9">{{ item.content }}</v-col>
      <v-col cols="2">{{ item.result }}</v-col>
      <v-col cols="1">{{ item.trueRatio }}%</v-col>
    </v-row>
    <v-row no-gutters class="text-center">
      <v-col cols="12">
        <v-footer id="mainFooter" absolute>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="moveTop()">
              結果を送る <br />
              (topに戻る)
            </v-btn>
          </v-card-actions>
        </v-footer>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  async fetch({ $axios, store }) {
    const storeResults = store.state.choicesResult.result
    const anserId = storeResults.map((anserData) => anserData.id)
    const ansersRatio = await $axios.$get(
      `https://aruaruswipeapp-test.herokuapp.com/resultsSoFar?qId=${anserId[0]}&qId=${anserId[1]}&qId=${anserId[2]}&qId=${anserId[3]}&qId=${anserId[4]}&qId=${anserId[5]}&qId=${anserId[6]}&qId=${anserId[7]}&qId=${anserId[8]}&qId=${anserId[9]}`
    )
    for (let i = 0; i <= 9; i++) {
      storeResults[i].trueRatio = ansersRatio[i].trueRatio
    }
  },

  computed: {
    results() {
      const storeResults = this.$store.state.choicesResult.result
      console.log(storeResults)
      return storeResults
    },
  },
  methods: {
    moveTop() {
      this.postData()
      this.$store.commit('choicesResult/removeResult')
      this.$router.push({ path: '/' })
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
        } else {
          console.log('予期しないエラーが発生しました。')
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
        .$post('https://aruaruswipeapp-test.herokuapp.com/sendResult', sendJson)
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
