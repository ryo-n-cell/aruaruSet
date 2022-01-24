<template>
  <v-container class="topPage" fluid pa-0>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" align="center">
        <h1>やり方</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-carousel v-model="slideNo" hide-delimiters>
            <v-carousel-item v-for="slide in slideArr" :key="slide.id">
              <v-row justify="center">
                <v-col cols="12" xs="12" md="6">
                  <v-img class="sizingPc" :src="slide.slide_src"> </v-img>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            v-model="slideNo"
            class="slideLetter"
            :show-arrows="false"
            hide-delimiters
            style="height: 8vh"
          >
            <v-carousel-item v-for="slide in slideArr" :key="slide.id">
              <v-row justify="center">
                <p class="slideLetter">{{ slide.letter }}</p>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  components: true,
  data() {
    return {
      slideNo: 0,
      slideArr: [
        {
          id: 0,
          slide_src: require('@/assets/img/top_img/topPageCarousels/fastApp.png'),
          letter: '最初に質問のカードが出ます',
        },
        {
          id: 1,
          slide_src: require('@/assets/img/top_img/topPageCarousels/yepImg.png'),
          letter: '「あるある」ならば右へスワイプ',
        },
        {
          id: 2,
          slide_src: require('@/assets/img/top_img/topPageCarousels/nopImg.png'),
          letter: '「ないない」ならば左へスワイプ。これを１０回繰り返します',
        },
        {
          id: 3,
          slide_src: require('@/assets/img/top_img/topPageCarousels/result.jpg'),
          letter: '最後に結果と今までの「あるある」の割合が出てきます。',
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
.topView {
  height: 80vh;
}
.topImg {
  height: 60vh;
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
.sectionSeparation {
  margin-top: 20vh;
}
.descriptionLetter {
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 5%;
}
.slideLetter {
  font-size: 10px;
  margin-top: 2vh;
  z-index: 1;
  color: black;
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
  .descriptionLetter {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5%;
  }
  .sizingPc {
    height: 40%;
  }
  .slideLetter {
    font-size: 20px;
  }
}
</style>
