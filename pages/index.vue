<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          ようこそ！「エンジニアあるあるアプリ(v0.1)」へ！
        </v-card-title>
        <v-card-text>
          <p>※こちらはNuxt.js+Vuetifyを使用しています</p>
          <hr class="my-3" />
          <h1>アプリ内容</h1>
          <p>
            ITエンジニアによくある事象はネットでよくあるけど、果たして本当なのか？
          </p>
          <p>
            みんなが手軽に答えれるアプリがあればいいよね。という思いから作成したアプリケーションです。
          </p>
          <p>本アプリUIはtinderに大きく影響を与えています。</p>
          <p></p>
          <div class="text-xs-right"></div>
          <hr class="my-3" />
          <h1>やりかた</h1>
          <p>１，以下の「CONTINUE」ボタンをタップ</p>
          <p>
            ２、カードが出てくるのでスワイプして答える。（左：ないない/右：あるよねー）
          </p>
          <p>３、結果が出てきます</p>
          <p>
            ※WebAPIはHerokuの無料アカウントへデプロイしてるので呼び出しに時間がかかります。
            よって、メインページの読み込みに時間がかかります
          </p>
          <p>サーバーは将来的にAmazon Web Service上で移設する予定です</p>
          <hr class="my-3" />
          <h1>ロードマップ</h1>
          <p>・フロント側の改良</p>
          <p>・問題をランダマイズしたWebAPIの作成</p>
          <p>・結果送信のクエリなどのバック側の作成</p>
          <p>・サーバーの移設</p>
          <hr class="my-3" />
          <h1>※こちらは、オープンソースにする予定がありません。</h1>
          <p>
            ですが、手伝ってくれる人がいれば以下のリンクでへお知らせください
          </p>
          <a href="https://twitter.com/BYEt0Vysprss9Ev">Twitter</a>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/mainPage"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
}
</script>
