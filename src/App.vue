<template>
  <div id="app">
    <router-link to="/foo">to /foo</router-link>
    <router-link to="/bar">to /bar</router-link>
    <button @click="toBaz">to /baz</button>
    <router-view/>
    <!--<router-view name="a"></router-view>-->
    <!--<router-view name="b"></router-view>-->
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'app',
  created: function () {

    axios.get("/index/recommend.json")
      .then((res) => {
        console.log("success", res.data)
      })

  },
  methods: {
    toBaz () {
      this.$router.push({
        path: '/baz'
      })
    }
  }
}
</script>

<style>
a, button{
  display: inline-block;
  height: 20px;border: 1px solid #000;
}
#app div {
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  vertical-align: top;
}
</style>
