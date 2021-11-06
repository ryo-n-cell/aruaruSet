<template>
  <v-container fluid pa-0>
    <v-row no-gutters class="topView" justify="center" align="center">
      <v-col pt-0>
        <v-img class="topImg" :src="image_src">
          <v-row id="topInnner" no-gutters justify="center" align="center">
            <v-col cols="10">
              <p id="topLetter">
                みんなの 「<strong id="strLetter">それな</strong
                >」をシェアしよう！
              </p>
            </v-col>
          </v-row>
        </v-img>
        <!-- <v-spacer />
          <v-btn color="primary" nuxt to="/mainPage"> Continue </v-btn>
        </v-card-actions> -->
      </v-col>
    </v-row>
    <v-row no-gutters class="topView-bottom" justify="center" align="center">
      <v-btn x-large color="success" dark>やってみる！</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('@/assets/img/top_img/sorena_top.jpg'),
    }
  },
}
</script>
<style>
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
</style>
