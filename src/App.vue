<template>
    <div id="app">
    <header>
       <b-navbar toggleable="md" type="dark" variant="dark">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand to="/">StandUP!</b-navbar-brand>
       <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- <b-nav-item to="/sprint">Home</b-nav-item> -->
          <b-nav-item  to="/sprint">Sprint</b-nav-item>
          <b-nav-item  to="/profile">Your Teams</b-nav-item>
          <!-- <b-nav-item to="/sign-up">Logout</b-nav-item> -->
        </b-navbar-nav>
       </b-collapse>
       <div class="userInfoDisplay" >
         {{currentUserName.toUpperCase()}}
        </div>
       <b-navbar-nav>
         <b-nav-item  to="/sign-up" v-show="!isSeen">Sign Up</b-nav-item>

         <b-nav-item  v-on:click='getUserInfo' v-show="!isSeen" class="loginBtn" href="http://localhost:3000/auth/github">Login</b-nav-item>
         </b-navbar-nav>
         <img :src="currentUserPhoto"  alt="BV">
      </b-navbar>
    </header>
    <main>
      <!-- Navbar on top and will render router components through the router-view below - no need to import them -->
      <router-view></router-view>

    </main>
     <footer class="footer">
   <b-navbar toggleable="md" type="dark" variant="dark">Footer
   </b-navbar>
</footer>

  </div>
</template>

<script>
import UsersStore from "./stores/UsersStore"
const jwtDecode = require('jwt-decode')

if (!this.currentUser) {
  this.ifOk = true
}

export default {
  name: 'App',
  data () {
    return {
      ifOk: false,
      reactive: true,
      isSeen: false,
      currentUser: '',
      currentUserName: '',
      currentUserPhoto: 'http://getwallpapers.com/wallpaper/full/0/3/c/12613.jpg',
      // https://images.unsplash.com/photo-1487872323115-ab52ad0d2910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80
      // http://www.csuchico.edu/~rpenne/screening/black.gif
      // https://cdn-images-1.medium.com/max/2000/1*6Ipq8lQz7lzTZQhmcQ61Tw.jpeg
      // https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2014/06/img3.gif
      // https://media.istockphoto.com/vectors/black-white-dotted-halftone-vector-background-centered-radial-dotted-vector-id916238928
      // https://images.unsplash.com/photo-1534237187820-7177d9bbd685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80
      currentUserOther: ''
    }
  },

  async created() {
     await this.getUserInfo()
  },

  methods: {
    toggle: function(){
      // if (this.isSeen === false) {
      //     this.isSeen = !this.isSeen
      // } else {
      //   !this.isSeen
      // }
        },
    async getUserInfo() {
      const tokenDecoded = jwtDecode(document.cookie.split('=')[1])
      let creatorId = tokenDecoded.id
      await fetch(`http://localhost:3000/users/${creatorId}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
       this.currentUser = await response.json()
        console.log("get one user store info:", this.currentUser)
        this.currentUserName = this.currentUser.username
        this.currentUserPhoto = this.currentUser.photo
        return this.currentUser
      })
    },




  }


}
 </script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202d3a;
}

img {
  height: 75px;
  width: 75px;
  border-radius: 15px;
  margin-right: 2%;
}
.userInfoDisplay {
  color: #ffffff;
  font-size: 24px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #e4e4e4;
  text-align: center;
}

</style>
