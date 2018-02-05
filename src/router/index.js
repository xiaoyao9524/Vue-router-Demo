import Vue from 'vue'
import Router from 'vue-router'
import foo from '../components/foo'
import bar from '../components/bar'
import baz from '../components/baz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'foo',
      path: '/foo',
      component: foo
    },
    {
      name: '/bar',
      path: '/bar',
      component: bar
    },
    {
      name: '/baz',
      path: '/baz',
      component: baz
    }
  ]
})
