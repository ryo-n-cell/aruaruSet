<template>
  <v-container class="sectionPages" fluid pa-0>
    <headerBer :header-title="title" :route-path="routePath"></headerBer>
    <v-row no-gutters align="center">
      <p>
        当サイトでは <br />
        ・アクセス解析 <br />
        ・ページトラッキング<br />
        ・イベントトラッキング<br />
        ・スクリーントラッキング<br />
        ・ユーザタイミングトラッキング<br />
        を目的にGoogleによるアクセス解析ツール
        「Googleアナリティクス」を使用しています。
      </p>
      <p>
        このGoogleアナリティクスは、データの収集のために
        Cookieを使用しています。 このデータは匿名で収集され
        ており個人を特定するものではありません。
      </p>
      <p>
        この機能はCookieを無効にすることで収集を拒否すること
        が出来ますのでお使いのブラウザの設定をご確認
        ください。この規約に関しての詳細は
      </p>
      <p>
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >・Googleアナリティクスサービス利用規約のページ</a
        >
      </p>
      <p>
        <a href="https://policies.google.com/?hl=ja"
          >・Googleポリシーと規約ページ</a
        >
      </p>
      <p>をご覧ください。</p>
    </v-row>
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
      title: 'プライバシーポリシー',
      routePath: '/biomenu',
      notInstalledDialog: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss">
.menuTop {
  font-size: 30px;
  color: black;
}
</style>
