<template>
  <v-container class="menuPage" fluid pa-0>
    <v-row class="menuTop" justify="center" align="center">
      <p>やってみよう！</p>
    </v-row>
    <v-row
      v-for="(item, i) in attributeArr"
      :key="i"
      class="selectBtn1"
      no-gutters
      justify="center"
      align="center"
    >
      <v-btn
        style="margin-top: 2vh"
        height="8vh"
        min-width="90vw"
        x-large
        color="#9D7575"
        dark
        >{{ item.attribute }}<br />あるある</v-btn
      >
    </v-row>
    <v-row no-gutters justify="center" align="center">
      <v-btn
        style="margin-top: 2vh"
        height="8vh"
        min-width="90vw"
        x-large
        color="#BA9B9B"
        dark
        >今までの結果を見る</v-btn
      >
    </v-row>
    <v-row class="mainBtn2" no-gutters justify="center" align="center">
      <v-btn
        style="margin-top: 2vh"
        height="5vh"
        min-width="90vw"
        x-large
        color="#908E8E"
        nuxt
        to="/biomenu"
        dark
        >作者について</v-btn
      >
    </v-row></v-container
  >
</template>

<script>
export default {
  data() {
    return {
      attributeArr: [
        {
          id: 0,
          attribute: 'エンジニア',
          urlRoot: '/mainPage',
        },
        {
          id: 1,
          attribute: 'デザイナー',
          urlRoot: '',
        },
        {
          id: 2,
          attribute: 'プロジェクトリーダー',
          urlRoot: '',
        },
        {
          id: 3,
          attribute: 'テスター',
          urlRoot: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.menuTop {
  padding-top: 5vh;
  font-size: 30px;
  color: black;
}
</style>
