<template>
  <v-container class="topPage" fluid pa-0>
    <v-row no-gutters class="topView" justify="center">
      <v-img height="70vh" class="topImg" :src="image_src">
        <v-row id="topInnner" no-gutters justify="center" align="center">
          <v-col cols="10">
            <p id="topLetter">
              みんなの 「<strong id="strLetter">それな</strong
              >」をシェアしよう！
            </p>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <v-row class="mainBtn1" no-gutters justify="center" align="center">
      <v-btn
        height="10vh"
        min-width="90vw"
        x-large
        color="#9D7575"
        nuxt
        to="/mainPage"
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
        to="/mainPage"
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
      image_src: require('@/assets/img/top_img/topPageCarousels/sorena_top.jpg'),
      carouselsArr: [
        {
          id: 0,
          image_src: '@/assets/img/top_img/topPageCarousels/sorena_top.jpg',
        },
        {
          id: 1,
          image_src: '@/assets/img/top_img/topPageCarousels/fastApp.png',
        },
        {
          id: 2,
          image_src:
            '@/assets/img/top_img/topPageCarousels/swipExplanation.png',
        },
        {
          id: 3,
          image_src: '@/assets/img/top_img/topPageCarousels/result.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.topPage {
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
#topInnner {
  height: 100%;
}
#strLetter {
  font-size: 16px;
}
#topLetter {
  font-size: 14px;
  color: white;
  background-color: black;
  text-align: center;
}
.mainBtn1 {
  height: 15vh;
}
.mainBtn2 {
  height: 10vh;
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
    background-color: black;
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
