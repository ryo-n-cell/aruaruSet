<template>
  <v-container class="topPage" fluid pa-0>
    <section class="sectionSeparation">
      <v-row no-gutters justify="center" align="center">
        <h1>なんのアプリ？</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-img id="whyAppImg" :src="image_src">
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
  </v-container>
</template>

<script>
export default {
  components: true,
  data() {
    return {
      image_src: require('@/assets/img/top_img/what_app.jpg'),
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
