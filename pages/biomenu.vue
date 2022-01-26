<template>
  <v-container class="biomenu" fluid pa-0>
    <v-row class="biomenuTop" justify="center" align="center">
      <p>作者についてなど</p>
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
          attribute: '作者プロフィール',
          urlRoot: '/bio',
        },
      ],
    }
  },
  methods: {
    actionRouter(itemId) {
      console.log(itemId)
      if (itemId === 2) {
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
