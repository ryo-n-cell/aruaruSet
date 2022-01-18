<template>
  <div id="mainSection">
    <vue-swing :config="config" @throwout="onThrowout">
      <div
        v-for="card in ip"
        :id="card.questions_id"
        :key="card.questions_id"
        class="card"
        @pointerdown="swipeEventstart($event)"
        @pointermove="swipeEventmove($event)"
        @pointerup="swipeEventup()"
      >
        <div class="selectPosition">
          <img
            v-if="nopeShow"
            id="nope"
            src="@/assets/img/naiwa.svg"
            alt="nope"
          />
          <img
            v-if="yepShow"
            id="yep"
            src="@/assets/img/sorena.svg"
            alt="yep"
          />
        </div>
        <span>{{ card.questions }}</span>
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
    const ip = await $axios.$get(
      'https://aruaruswipeapp-test.herokuapp.com/getData'
    )
    return { ip }
  },

  data() {
    return {
      data: {},
      config: {
        allowedDirections: [VueSwing.Direction.LEFT, VueSwing.Direction.RIGHT],
        isThrowOut: (xOffset, yOffset, element, throwOutConfidence) => {
          return throwOutConfidence > 0.5
        },
        minThrowOutDistance: 100,
        maxThrowOutDistance: 120,
        maxRotation: 50,
      },
      result: [],
      moveEvent: false,
      criteriaCoordinatesX: 0,
      swipeDistance: 0,
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
@media screen and (min-width: 1024px) {
  .card {
    margin-top: 10vh;
    font-size: 40px;
    height: 70vh;
    width: 30vw;
    justify-content: center;
    left: calc(50% - 15vw);
  }
}
@media screen and (max-width: 599px) {
  .card {
    margin-top: 15vh;
    font-size: 25px;
    height: 60vh;
    width: 60vw;
    justify-content: center;
    left: calc(50% - 30vw);
  }
}

.selectPosition {
  position: absolute;
  pointer-events: none;
}

#yep {
  width: 20vw;
  pointer-events: none;
}

#nope {
  width: 20vw;
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

#mainSection {
  height: 90%;
}
#mainFooter {
  height: 10%;
  font-size: 30px;
}
#mainFooter > p {
  text-align: center;
  margin-bottom: 0;
}
</style>
