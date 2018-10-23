import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeComponent',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/homeComponent'))
        })
      }
    },
    {
      path: '/cate',
      name: 'catelistComponent',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/catelist/catelistComponent'))
        })
      }
    },
    {
      path: '/more',
      name: 'morecateComponent',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/morecate/morecateComponent'))
        })
      }
    },
    {
      path: '/detil',
      name: 'detilComponent',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/detil/detilComponent'))
        })
      }
    },
    {
      path: '/mianze',
      name: 'nozeComponent',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('@/components/noze/nozeComponent'))
        })
      }
    }
  ]
})
