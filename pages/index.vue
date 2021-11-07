<template>
  <v-container class="topPage" fluid pa-0>
    <v-row no-gutters class="topView" justify="center" align="center">
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
      <v-btn x-large color="#1FD267" dark>やってみる！</v-btn>
    </v-row>
    <section class="sectionSeparation">
      <v-row no-gutters justify="center" align="center">
        <h1>なんのアプリ？</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-img :src="image_src2" max-height="230">
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
          <v-img :src="image_src2"> </v-img>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" align="center">
        <h1>ロードマップ</h1>
      </v-row>
    </section>
    <section style="margin: 5vh">
      <v-row no-gutters justify="center" align="center">
        <v-btn x-large color="#1FD267" dark>やってみる！</v-btn>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image_src1: require('@/assets/img/top_img/sorena_top.jpg'),
      image_src2: require('@/assets/img/top_img/what_app.jpg'),
      // image_src3: require('@/assets/img/top_img/sorena_top.jpg'),
      // image_src4: require('@/assets/img/top_img/sorena_top.jpg'),
    }
  },
}
</script>
<style lang="scss">
.topPage {
  font-family: 'Roboto-Black';
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
  /* height: 30vh; */
}
.descriptionLetter {
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 5%;
}
</style>
