<template>
  <v-container class="topPage" fluid pa-0>
    <v-row no-gutters class="topView" justify="center" align="center">
      <div id="titleBox">SORENA<br />(βバージョン)</div>
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
      <v-btn x-large color="#1FD267" nuxt to="/mainPage" dark
        >やってみる！</v-btn
      >
    </v-row>
    <section class="sectionSeparation">
      <v-row no-gutters justify="center" align="center">
        <h1>なんのアプリ？</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col cols="10">
          <v-img id="whyAppImg" :src="image_src2">
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
          <v-carousel v-model="slideNo" hide-delimiters>
            <v-carousel-item v-for="slide in slideArr" :key="slide.id">
              <v-row justify="center">
                <v-col cols="12" xs="12" md="6">
                  <v-img class="sizingPc" :src="slide.slide_src"> </v-img>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            v-model="slideNo"
            class="slideLetter"
            :show-arrows="false"
            hide-delimiters
            style="height: 8vh"
          >
            <v-carousel-item v-for="slide in slideArr" :key="slide.id">
              <v-row justify="center">
                <p class="slideLetter">{{ slide.letter }}</p>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" style="margin-bottom: 2vh">
        <h1>ロードマップ</h1>
      </v-row>
      <v-row no-gutters justify="center">
        <p>Torelloでロードマップを公開しています。</p>
      </v-row>
      <v-row no-gutters justify="center">
        <p>以下のボタンからTorelloのワークスペースへ遷移します</p>
      </v-row>
      <v-row no-gutters justify="center">
        <v-btn
          x-large
          color="#1FD267"
          href="https://trello.com/b/x62CNjPh/sorena"
          dark
          >Torello</v-btn
        >
      </v-row>
    </section>
    <section style="margin: 5vh">
      <v-row no-gutters justify="center" align="center">
        <v-btn x-large color="#1FD267" nuxt to="/mainPage" dark
          >やってみる！</v-btn
        >
      </v-row>
    </section>
    <section style="margin-top: 5vh">
      <v-row no-gutters justify="center" style="margin-bottom: 2vh">
        <h1>プライバシーポリシー</h1>
      </v-row>
      <v-row no-gutters justify="center" align="center">
        <p>
          当サイトでは、アクセス解析、ページトラッキング、イベントトラッキング<br />
          スクリーントラッキング、ユーザタイミングトラッキングを目的に<br />
          Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。<br />
        </p>
      </v-row>
      <v-row no-gutters justify="center" align="center">
        <p>
          このGoogleアナリティクスはデータの収集のためにCookieを使用しています。<br />
          このデータは匿名で収集されており、個人を特定するものではありません。<br />
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、<br />
          お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<br />
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            >Googleアナリティクスサービス利用規約のページ</a
          >
          や
          <a href="https://policies.google.com/technologies/ads?hl=ja"
            >Googleポリシーと規約ページ</a
          ><br />
          をご覧ください。
        </p>
      </v-row>
    </section>
    <v-footer>
      <span>&copy; Ryota Nakamura {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image_src1: require('@/assets/img/top_img/sorena_top.jpg'),
      image_src2: require('@/assets/img/top_img/what_app.jpg'),
      slideNo: 0,
      slideArr: [
        {
          id: 0,
          slide_src: require('@/assets/img/top_img/howTo/fastApp.png'),
          letter: '最初に質問のカードが出ます',
        },
        {
          id: 1,
          slide_src: require('@/assets/img/top_img/howTo/yepImg.png'),
          letter: '「あるある」ならば右へスワイプ',
        },
        {
          id: 2,
          slide_src: require('@/assets/img/top_img/howTo/nopImg.png'),
          letter: '「ないない」ならば左へスワイプ。これを１０回繰り返します',
        },
        {
          id: 3,
          slide_src: require('@/assets/img/top_img/howTo/result.jpg'),
          letter: '最後に結果と今までの「あるある」の割合が出てきます。',
        },
      ],
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
