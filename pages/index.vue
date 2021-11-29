<template>
  <v-container class="topPage" fluid pa-0>
    <v-row no-gutters class="topView" justify="center" align="center">
      <div id="titleBox">SORENA<br />(βバージョン)</div>
      <v-col pt-0>
        <v-img class="topImg" :src="image_src1">
          <v-row id="topInnner" no-gutters justify="center" align="center">
            <v-col cols="10">
              <p id="topLetter">
                みんなの 「<strong id="strLetter">それな</strong
                >」をシェアしよう！
              </p>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center">
      <v-btn x-large color="#1FD267" nuxt to="/mainPage" dark
        >やってみる！</v-btn
      >
    </v-row>
    <section class="sectionSeparation">
      <v-row no-gutters justify="center" align="center">
        <h1>なんのアプリ？</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-img id="whyAppImg" :src="image_src2">
            <v-row no-gutters justify="end" align="end" style="height: 100%">
              <v-col class="descriptionLetter" cols="6">
                <p>
                  みんなのあるあるネタをスワイプ<br />
                  して答えていくアプリです。<br />
                  世界中のみんなの「あるよねー」<br />
                  が見れます。
                </p>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" align="center">
        <h1>やり方</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-carousel v-model="slideNo">
            <v-carousel-item v-bind:key="slide.id" v-for="slide in slideArr">
              <v-img :src="slide.slide_src"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" align="center">
        <h1>ロードマップ</h1>
        <!-- <a href="#">Torello</a> -->
      </v-row>
    </section>
    <section style="margin: 5vh">
      <v-row no-gutters justify="center" align="center">
        <v-btn x-large color="#1FD267" nuxt to="/mainPage" dark
          >やってみる！</v-btn
        >
      </v-row>
    </section>
    <v-footer>
      <span>&copy; Ryota Nakamura {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image_src1: require('@/assets/img/top_img/sorena_top.jpg'),
      image_src2: require('@/assets/img/top_img/what_app.jpg'),
      slideNo: 0,
      slideArr: [
        {
          id: 0,
          slide_src: require('@/assets/img/top_img/what_app.jpg'),
          letter: 'テスト1',
        },
        {
          id: 1,
          slide_src: require('@/assets/img/top_img/what_app.jpg'),
          letter: 'テスト2',
        },
        {
          id: 2,
          slide_src: require('@/assets/img/top_img/what_app.jpg'),
          letter: 'テスト3',
        },
        {
          id: 3,
          slide_src: require('@/assets/img/top_img/what_app.jpg'),
          letter: 'テスト4',
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
  .descriptionLetter {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5%;
  }
}
</style>
