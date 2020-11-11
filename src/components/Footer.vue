<template>
  <div class="foot">
    <van-tabbar route>
      <van-tabbar-item
        replace
        :to="item.path"
        icon="home-o"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/home",
          name: "首页",
        },
        {
          path: "/list",
          name: "买车",
        },
        {
          path: "/car",
          name: "卖车",
        },
        {
          path: "/my",
          name: "我的",
        },
      ],
    };
  },
};
</script>

<style>
</style>