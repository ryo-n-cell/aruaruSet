<template>
  <v-container class="sectionPages" fluid pa-0>
    <headerBer :header-title="title" :route-path="routePath"></headerBer>
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
        @click="actionRouter(item.id)"
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
        @click="notInstalledDialog = true"
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
        >作者について
      </v-btn>
    </v-row>
    <v-dialog v-model="notInstalledDialog" width="500">
      <v-card>
        <v-card-text>
          <p style="font-size: 20px">
            ごめんなさい！まだ未実装です！<br />
            近いうちに実装するので<br />
            他のあるあるを遊んでみてね！
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import headerBer from '@/components/headerBer'
export default {
  components: {
    headerBer,
  },
  data() {
    return {
      title: 'メニュー',
      routePath: '/',
      notInstalledDialog: false,
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
  methods: {
    actionRouter(itemId) {
      if (this.attributeArr[itemId].urlRoot === '') {
        this.notInstalledDialog = true
      } else {
        this.$router.push(this.attributeArr[itemId].urlRoot)
      }
    },
  },
}
</script>
<style lang="scss"></style>
