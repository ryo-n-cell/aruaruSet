<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          ようこそ！「エンジニアあるあるアプリ(v0.1)」へ！
        </v-card-title>
        <v-card-text>
          <p>※こちらはNuxt.js+Vuetifyを使用しています</p>
          <hr class="my-3" />
          <h1>アプリ内容</h1>
          <p>
            ITエンジニアによくある事象はネットでよく見かけるけど、果たして皆そうなのか？
          </p>
          <p>
            みんなが手軽に答えれるアプリがあればいいよね。という思いから作成したアプリケーションです。
          </p>
          <p>本アプリUIはtinderに大きく影響を与えています。</p>
          <p>
            また、別会社様のエンジニアさんと協働で開発しています（僕=>Web版とバックエンド、インフラ回り/エンジニアさん=>ネイティブアプリ版のみ）
          </p>
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
            ※WebAPIはHerokuの無料アカウントへデプロイしてるのでAPI呼び出しに時間がかかります。
            よって、メインページの読み込みに時間がかかります。
            実用化したら有料アカウントへ移行して常に表示できる形にします
            （常にAPIを起こすバッチも作れますが、Heroku Loveなので課金しますw）
          </p>
          <hr class="my-3" />
          <h1>おおまかなロードマップ</h1>
          <p>・プロトタイプのフロントとバックエンドAPIを作る←ココまでは完成</p>
          <p>・トランザクション処理などのDBの設計構築</p>
          <p>=>最小から最大スケールまで設計済なので、まずは最小から構築</p>
          <p>・DBと繋げて、各種APIを作成</p>
          <p>
            =>DBにある問題をランダマイズしたAPIや今までの利用者が答えた結果を表示するAPIを作る。
          </p>
          <p>・フロント側の改良やら色々</p>
          <p>=>色々グチャグチャなので整理。また、メインページのUX周りも整備</p>
          <p>フォーム回りを作成</p>
          <p>
            ペネトレーションテスト(SQLインジェクション、Dos攻撃対策はされてるか念のため)
          </p>
          <p>負荷テスト（Webとスマホ両方</p>
          <p>＝＝＝＝ここまでがv1＝＝＝＝</p>
          <p>Twitterとの連携（OAuth認証を使うかも）</p>
          <p>
            ・「デザイナーあるある」等の別系統を作成するためにDBを最大スケールまで構築
          </p>
          <p>・DBと繋げて、各種APIを作成</p>
          <p>etc....</p>
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
export default {}
</script>
