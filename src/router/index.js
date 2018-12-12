import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Profile from '../components/Profile.vue'
import Sprint from '../components/Sprint.vue'
import NotFound from '../components/error-pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/sprint',
      name: 'Sprint',
      component: Sprint,
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
