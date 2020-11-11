<template>
  <div class="home">
    <div>
      <button @click="add">添加</button>
      <p>
        姓名:<input type="text" placeholder="输入姓名" v-model="user.name" />
      </p>
      <p>id:<input type="text" placeholder="输入id" v-model="user.id" /></p>
    </div>
    <div>
      <button @click="del">删除</button>
      <p><input type="text" v-model="id" /></p>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>姓名：{{ item.name }}</span
        ><span>id:{{ item.id }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      user: {
        name: "",
        id: "",
      },
      id: "",
    };
  },
  created() {
    this.getlist();
  },
  _methods: {
    getlist() {
      axios.get("/api/list").then((res) => {
        this.list = res.data;
      });
    },
    add() {
      axios
        .post("/apl/add", {
          user: this.user,
        })
        .then((res) => {
          this.getlist();
        });
    },
    del() {
      axios
        .get("/api/del", {
          params: {
            id: this.id,
          },
        })
        .then((res) => {
          this.getlist();
        });
    },
  },
  get methods_1() {
    return this._methods;
  },
  set methods_1(value) {
    this._methods = value;
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
};
</script>

<style>
</style>