<template>
  <div class="bar">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      msg: 'im \' bar'
    }
  },
  created () {
    // console.log(this.$route.params);
  },
  beforeRouteUpdate (to, from, next) {
    console.table(from);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
