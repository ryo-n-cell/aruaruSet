<template>
  <v-container class="biomenu" fluid pa-0>
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
        >{{ item.attribute }}</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '作者についてなど',
      routePath: '/menu',
      attributeArr: [
        {
          id: 0,
          attribute: 'フロントエンド for GitHub',
          urlRoot: 'https://github.com/ryo-n-cell/aruaruSet',
        },
        {
          id: 1,
          attribute: 'バックエンド for GitHub',
          urlRoot: 'https://github.com/ryo-n-cell/aruaruappAPI',
        },
        {
          id: 2,
          attribute: 'プライバシーポリシー',
          urlRoot: '/privacyPolicy',
        },
        {
          id: 3,
          attribute: '作者プロフィール',
          urlRoot: '/bio',
        },
      ],
    }
  },
  methods: {
    actionRouter(itemId) {
      if (itemId === 2 || itemId === 3) {
        this.$router.push(this.attributeArr[itemId].urlRoot)
      } else {
        window.location.href = this.attributeArr[itemId].urlRoot
      }
    },
  },
}
</script>
<style lang="scss">
.biomenuTop {
  padding-top: 5vh;
  font-size: 30px;
  color: black;
}
</style>
