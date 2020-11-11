<template>
  <div class="home">
    <div class="lin">
      <span @click="bak">&lt;</span>
      <span></span>
      <span></span>
    </div>
    <p>
      <img :src="item.url" alt="" />
    </p>
    <p>
      <b>{{ item.title }}</b>
    </p>
    <p>
      {{ item.dest }}
    </p>
    <p>
      <b style="color: red">{{ item.price }}万</b>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("/api/dotail", {
        params: {
          id: this.id,
        },
      })
      .then((res) => {
        console.log(res);
      });
  },
  data() {
    return {
      id: this.$route.id,
      item: JSON.parse(window.localStorage.getItem("car")) || {},
    };
  },
  methods: {
    bak() {
      this.$router.back();
    },
  },
};
</script>

<style lang="css" scoped>
img {
  width: 100%;
  height: 300px;
}
.lin {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>