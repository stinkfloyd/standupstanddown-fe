import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  //  ALl nav paths on the app follow the same format in this object

    // {
    //   path: '/resume',
    //   name: 'Resume',
    //   component: Resume
    // },
    // {
    //   path: '/playground',
    //   name: 'Playground',
    //   component: Playground
    // }
  ],
})
