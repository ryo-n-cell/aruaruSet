<template>
  <v-container class="menuPage" fluid pa-0>
    <headerBer :header-title="title"></headerBer>
    <v-row class="ma-0" justify="center" align="center">
      <img height="200" width="200" class="avatarImg" :src="avatarImgSrc" />
    </v-row>
    <v-row class="menuTop ma-0" justify="center" align="center">
      <h4>りょう</h4>
    </v-row>
    <v-row class="menuTop ma-0" justify="center" align="center">
      <h5>広島生まれ 東京住み</h5>
    </v-row>
    <p>
      2020年からITの世界に入る。 VBA、バッチファイル等の業務効率化を
      行ってきたが、Webアプリ開発の世界に
      飛び込みたいと思い、Webサービス兼ポートフォリオの「SORENA」を作る。
    </p>
    <p>現在転職を考えている。（2022/2 現在）</p>
    <p>
      できること<br />
      ・小規模Webサービスの設計 <br />
      ・DB API設計 <br />
      ・・Figmaを使用したアプリプロトタイプの作成<br />
      ・フロント、バッグの実装<br />
      =>Vue.js/Nuxt.js(フロント側) <br />
      =>Node.js(Expressを使ったAPIサーバー)<br />
      ・ITIL4の概念を使用したサービス運用設計など
    </p>
    <v-row class="bioIcons ma-0" justify="center" align="center">
      <v-col v-for="(item, i) in iconsArr" :key="i" cols="3">
        <img class="icons" height="50" width="50" :src="item.image_src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '作者プロフィール',
      avatarImgSrc: require('@/assets/img/top_img/bio/bio.png'),
      iconsArr: [
        {
          id: 0,
          image_src: require('@/assets/img/top_img/bio/github.png'),
          alt: 'GitHub',
        },
        {
          id: 1,
          image_src: require('@/assets/img/top_img/bio/twitter.png'),
          alt: 'twitter',
        },
        {
          id: 2,
          image_src: require('@/assets/img/top_img/bio/qiita.png'),
          alt: 'qiite',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.bioTop {
  font-size: 20px;
  color: black;
}
.avatarImg {
  border-radius: 50%;
}
.icons {
  filter: drop-shadow(4px 3px 2px rgba(172, 158, 158, 0.6));
}
</style>
