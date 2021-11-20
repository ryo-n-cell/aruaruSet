<template>
  <div>
    <v-subheader> 結果 </v-subheader>
    <v-row
      v-for="item in results"
      :key="item.id"
      no-gutters
      class="text-center resultsList"
    >
      <v-col class="resultList" cols="9">{{ item.content }}</v-col>
      <v-col cols="3">{{ item.result }}</v-col>
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
  computed: {
    results() {
      return this.$store.state.choicesResult.result
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
      console.log(sendData)
      const sendJson = []
      sendData.forEach((resultsData) => {
        let resultsObj = {}
        console.log(resultsData.result)
        let statusVar = ''
        if (resultsData.result === 'yup') {
          statusVar = true
        } else if (resultsData.result === 'nope') {
          statusVar = false
        } else {
          console.log('error')
        }
        resultsObj = {
          question_id: resultsData.id,
          category_id: 1,
          status: statusVar,
        }
        sendJson.push(resultsObj)
      })
      console.log(sendJson)
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
