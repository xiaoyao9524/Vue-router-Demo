<template>
  <div class="foo">
    <h1>{{msg}}</h1>
    <h5>{{propsTitle}}</h5>
    <h5>{{ propsMsg }}</h5>
  </div>
</template>

<script>
export default {
  name: 'foo',
  props: {
    propsTitle: {
      default: "propsTitle",
      type: String
    },
    propsMsg: {
      default: "propsMsg",
      type: String
    },
  },
  data () {
    return {
      msg: "im ' foo"
    }
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
