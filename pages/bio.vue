<template>
  <v-container class="menuPage" fluid pa-0>
    <v-row class="bioTop" justify="center" align="center">
      <p>作者プロフィール</p>
    </v-row>
    <v-row justify="center" align="center">
      <img height="200" width="200" class="avatarImg" :src="avatarImgSrc" />
    </v-row>
    <v-row class="menuTop" justify="center" align="center">
      <p>りょう</p>
    </v-row>
    <v-row class="menuTop" justify="center" align="center">
      <p>広島生まれ 広島育ち 東京住み</p>
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
    <v-row class="bioIcons" justify="center" align="center">
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
  padding-top: 5vh;
  font-size: 30px;
  color: black;
}
.avatarImg {
  border-radius: 50%;
}
.icons {
  filter: drop-shadow(4px 3px 2px rgba(172, 158, 158, 0.6));
}
</style>
