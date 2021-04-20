<template>
  <vue-swing @throwout="onThrowout">
    <div v-for="card in ip" :id="card.id" :key="card.id" class="card">
      <span>{{ card.question }}</span>
    </div>
  </vue-swing>
</template>

<script>
import VueSwing from 'vue-swing'
import { mapMutations } from 'vuex'

export default {
  components: { VueSwing },

  async asyncData({ $axios }) {
    const ip = await $axios.$get(
      'https://protected-hamlet-09315.herokuapp.com/question-tables'
    )
    console.log(ip)
    return { ip }
  },

  data() {
    return {
      config: {
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT,
        ],
        minThrowOutDistance: 250,
        maxThrowOutDistance: 300,
      },
      result: [],
      // WebAPIから10問ほど引っ張ってくる
    }
  },

  computed: {
    results() {
      return this.$store.state.choiceResult.result
    },
  },

  // created: {
  //   async fetchSomething() {
  //     const ip = await this.$axios.$get(
  //       'https://protected-hamlet-09315.herokuapp.com/question-tables'
  //     )
  //     this.ip = ip
  //     console.log(ip)
  //   },
  // },

  methods: {
    // カードを消すアクションと結果処理メソッドに引数を渡す
    // target=Nodeオブジェクト（https://developer.mozilla.org/ja/docs/Web/API/Node）
    onThrowout({ target, throwDirection }) {
      setTimeout(() => {
        this.ip.pop()
      }, 100)
      this.resultEvent(target.id, target.textContent, throwDirection)
    },

    // 結果をresultに渡すメソッド 左:ないない,右:あるある,上:めっちゃわかる
    resultEvent(id, textContent, throwDirection) {
      // console.log(id, throwDirection)
      const resultDirection = throwDirection.toString()
      const resultObj = { id: '', content: '', result: '' }
      if (resultDirection === 'Symbol(LEFT)') {
        resultObj.result = 'nope'
      } else if (resultDirection === 'Symbol(UP)') {
        resultObj.result = 'super'
      } else if (resultDirection === 'Symbol(RIGHT)') {
        resultObj.result = 'yup'
      } else {
        console.log('エラー')
      }
      resultObj.id = id
      resultObj.content = textContent
      this.result.push(resultObj)
      console.log(resultObj)
      this.addResult(resultObj)
      this.endEvent()
    },

    addResult(resultObj) {
      this.$store.commit('choicesResult/add', resultObj)
    },

    ...mapMutations({
      toggle: 'choicesResult/toggle',
    }),

    // カードが０になったら結果画面にルーティングする
    endEvent() {
      if (this.ip.length === 1) {
        console.log('なくなりました')
        // this.$router.push('/resultView')
        this.$router.push({ path: '/resultView', query: this.result })
      }
    },
  },
}
</script>

<style>
.card {
  align-items: center;
  color: black;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 72px;
  height: 85vh;
  width: 30vw;
  justify-content: center;
  left: calc(50% - 15vw);
  position: absolute;
  /* top: calc(50% - 100px); */
}
</style>
