<template>
  <div>
    <vue-swing @throwout="onThrowout">
      <div
        v-for="card in ip"
        :id="card.id"
        :key="card.questions_id"
        class="card"
        @pointerdown="swipeEventstart($event)"
        @pointermove="swipeEventmove($event)"
        @pointerup="swipeEventup()"
      >
        <div class="selectPosition">
          <img
            v-if="nopeShow"
            class="nope"
            src="@/assets/img/nope-txt.png"
            alt="nope"
          />
          <img
            v-if="yepShow"
            class="yep"
            src="@/assets/img/yep-txt.png"
            alt="yep"
          />
        </div>
        <span>{{ card.question }}</span>
      </div>
    </vue-swing>
    <v-footer id="mainFooter" absolute>
      <v-row no-gutters justify="center" align="center">
        <p>{{ progressCount }}/10</p>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import VueSwing from 'vue-swing'
import { mapMutations } from 'vuex'

export default {
  components: { VueSwing },
  // WebAPIから10問ほど引っ張ってくる
  async asyncData({ $axios }) {
    const ip = await $axios.$get('https://aruaruswipeapp.herokuapp.com/')
    return { ip }
  },

  data() {
    return {
      data: {},
      config: {
        allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT],
        throwOutConfidence: 2,
        minThrowOutDistance: 250,
        maxThrowOutDistance: 300,
      },
      result: [],
      // カード要素の左側x軸を基準とする
      moveEvent: false,
      criteriaCoordinatesX: 0,
      swipeDistance: 0,
      // ディグレクティブアニメーションは後で書く
      nopeShow: false,
      yepShow: false,
      progressCount: 1,
    }
  },

  computed: {
    results() {
      return this.$store.state.choiceResult.result
    },
  },

  methods: {
    // 座標イベント
    swipeEventstart(e) {
      this.criteriaCoordinatesX = e.clientX
      this.moveEvent = true
    },
    swipeEventmove(e) {
      this.swipeDistance = this.criteriaCoordinatesX - e.clientX
      if (this.moveEvent === true) {
        if (this.swipeDistance > 0) {
          this.nopeShow = true
          this.yepShow = false
        } else if (this.swipeDistance < 0) {
          this.nopeShow = false
          this.yepShow = true
        }
      }
    },
    swipeEventup() {
      this.moveEvent = false
      this.criteriaCoordinatesX = 0
      this.nopeShow = false
      this.yepShow = false
    },
    // カードを消すアクションと結果処理メソッドに引数を渡す
    // target=Nodeオブジェクト（https://developer.mozilla.org/ja/docs/Web/API/Node）
    onThrowout({ target, throwDirection }) {
      this.moveEvent = false
      this.nopeShow = false
      this.yepShow = false
      this.criteriaCoordinatesX = 0
      setTimeout(() => {
        this.progressCount += 1
        this.ip.pop()
      }, 100)
      this.resultEvent(target.id, target.textContent, throwDirection)
    },

    // 結果をresultに渡すメソッド 左:ないない,右:あるある,
    resultEvent(id, textContent, throwDirection) {
      const resultDirection = throwDirection.toString()
      const resultObj = { id: '', content: '', result: '' }
      if (resultDirection === 'Symbol(LEFT)') {
        resultObj.result = 'nope'
      } else if (resultDirection === 'Symbol(RIGHT)') {
        resultObj.result = 'yup'
      }
      resultObj.id = id
      resultObj.content = textContent
      this.result.push(resultObj)
      this.addResult(resultObj)
      this.endEvent(resultObj)
    },

    addResult(resultObj) {
      this.$store.commit('choicesResult/add', resultObj)
    },

    ...mapMutations({
      toggle: 'choicesResult/toggle',
    }),

    endEvent() {
      if (this.ip.length === 1) {
        this.$router.push({ path: '/resultView' })
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
}
.selectPosition {
  position: absolute;
  pointer-events: none;
}
.nope .yep {
  position: absolute;
  pointer-events: none;
}

.nope-enter-active {
  animation: swipe-in 1s;
}
.nope-leave-active {
  animation: swipe-in 1s reverse;
}
@keyframes swipe-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 599px) {
  /* 320pxまでの幅の場合に適応される */
  .card {
    margin-top: 15vh;
    font-size: 25px;
    height: 60vh;
    width: 60vw;
    justify-content: center;
    left: calc(50% - 30vw);
  }
}

/* ===========================(21/11/8~) */
#mainFooter {
  height: 10vh;
  font-size: 40px;
}
#mainFooter > p {
  text-align: center;
}
</style>
