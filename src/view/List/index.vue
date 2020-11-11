<template>
  <div class="home">
    <div class="heand">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab :title="item.name" v-for="(item, index) in list" :key="index">
          <van-card
            num="2"
            :price="ite.price"
            desc="描述信息"
            :title="ite.title"
            :thumb="ite.url"
            v-for="(ite, ind) in list[active].children"
            :key="ind"
            @click="Todotail(ite.id, ite)"
          />
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      active: 0,
    };
  },
  created() {
    axios.get("/api/list1").then((res) => {
      this.list = res.data.list;
      console.log(this.list);
    });
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    Todotail(id, ite) {
      this.$router.push(`/dotail?id=${id}`);
      window.localStorage.setItem("car", JSON.stringify(ite));
    },
  },
};
</script>

<style>
</style>