<template>
  <v-container id="topPage" class="ma-0" fluid pa-0>
    <v-row no-gutters class="topView" justify="center">
      <v-carousel height="75vh" delimiter-icon="mdi-minus" v-model="model">
        <v-carousel-item v-for="(item, i) in carouselsArr" :key="i">
          <v-img height="65vh" class="topImg" :src="item.image_src">
            <div class="topInnner_section">
              <v-row
                v-show="model === 0"
                id="topInnner"
                no-gutters
                justify="center"
              >
                <p id="topLetter">SORENA</p>
              </v-row>
              <v-row
                v-show="model === 0"
                id="topInnner"
                no-gutters
                justify="center"
              >
                <p id="topLetter_sub">
                  みんなの 「<strong id="strLetter">それな</strong
                  >」をシェアしよう！
                </p>
              </v-row>
            </div>
          </v-img>
          <v-row
            v-show="model > 0"
            id="tutorialLetter"
            no-gutters
            justify="center"
          >
            <p v-html="item.letter"></p>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row class="mainBtn1" no-gutters justify="center" align="center">
      <v-btn
        height="10vh"
        min-width="90vw"
        x-large
        color="#9D7575"
        nuxt
        to="/menu"
        dark
        >やってみる？</v-btn
      >
    </v-row>
    <v-row class="mainBtn2" no-gutters justify="center" align="center">
      <v-btn
        height="5vh"
        min-width="90vw"
        x-large
        color="#908E8E"
        nuxt
        to="/biomenu"
        dark
        >作者について</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      carouselCount: 0,
      carouselsArr: [
        {
          id: 0,
          image_src: require('@/assets/img/top_img/topPageCarousels/sorena_top.gif'),
          letter: '',
        },
        {
          id: 1,
          image_src: require('@/assets/img/top_img/topPageCarousels/fastApp.png'),
          letter: '問題のカードが出てきます',
        },
        {
          id: 2,
          image_src: require('@/assets/img/top_img/topPageCarousels/swipExplanation.png'),
          letter:
            '右へスワイプすれば「あるよねー」<br>左へスワイプすれば「ないよねー」<br>と判断します',
        },
        {
          id: 3,
          image_src: require('@/assets/img/top_img/topPageCarousels/result.jpg'),
          letter: '１０問回答したら結果が出てきます',
        },
      ],
    }
  },
  mounted() {
    const vh = window.innerHeight
    document.getElementById('topPage').style.height = vh + 'px'
  },
}
</script>
<style lang="scss">
#topPage {
  font-family: 'Roboto-Black';
}
#titleBox {
  width: 30vw;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  color: white;
  background-color: rgb(121, 0, 113);
  text-align: center;
}
.topImg {
  height: 100%;
}
.topInnner_section {
  margin-top: 30vh;
}

#topLetter {
  font-family: 'Amiri';
  width: 50vw;
  font-size: 36px;
  color: white;
  background-color: rgba($color: #302c2c, $alpha: 0.7);
  text-align: center;
}
#topLetter_sub {
  font-size: 16px;
  color: white;
  background-color: rgba($color: #302c2c, $alpha: 0.7);
  text-align: center;
}
#strLetter {
  font-size: 20px;
}
#tutorialLetter {
  margin-top: 2vh;
  color: black;
  font-size: 3vw;
}
.mainBtn1 {
  height: 15vh;
}

@media screen and (min-width: 1024px) {
  #titleBox {
    width: 10vw;
  }
  .topImg {
    height: 100vh;
  }
  #topLetter {
    font-size: 50px;
    color: white;
    text-align: center;
  }
  #strLetter {
    font-size: 60px;
  }
  #whyAppImg {
    max-height: 80vh;
  }
  .SwitchPc {
    height: 50vh;
    widows: 50vh;
    text-align: center;
  }
  .sizingPc {
    height: 40%;
  }
}
</style>
